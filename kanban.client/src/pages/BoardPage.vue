<template>
  <div class="container-fluid">
    <div class="row my-2 justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">
        </h1>
        <form @submit.prevent="createList" class="border bg-light p-1">
          <div class="m-3 border-rounded">
            <input v-model="state.newList.title" type="text" class="form-control" id="newList" placeholder="new list...">
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="card-columns">
        <List v-for="list in state.lists" :key="list.id" :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { listsService } from '../services/ListsService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
import { boardsService } from '../services/BoardsService'

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newList: {},
      activeBoard: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.lists)
    })
    onMounted(async() => {
      try {
        await boardsService.getBoards(route.params.id)
        await boardsService.getBoardInfo(route.params.id)
        await listsService.getLists(route.params.id)
      } catch (error) {
        Notification.toast(error)
      }
    })
    return {
      state,
      async createList() {
        try {
          state.newList.boardId = route.params.id
          await listsService.createList(state.newList)
          state.newList = {}
        } catch (error) {
          Notification.toast('error')
        }
      }
    }
  }
}
</script>

<style>

</style>

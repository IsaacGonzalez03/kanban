<template>
  <div class="container-fluid">
    <div class="row my-5">
      <div class="col-md-4">
        <h1>
          Board title
        </h1>
        <form @submit.prevent="createList" class="border bg-light p-3">
          <div class="mb-3">
            <input v-model="state.newList.title" type="text" class="form-control" id="newList" placeholder="new list...">
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <List v-for="list in state.lists" :key="list.id" :list="list" />
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

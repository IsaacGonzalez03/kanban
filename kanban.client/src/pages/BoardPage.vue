<template>
  <div class="container-fluid">
    <div class="row">
      <h1>this is the board page</h1>
      <List v-for="l in lists" :key="l.id" :list="l" />
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <form class="border bg-light p-3">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">New Task Title</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { listsService } from '../services/ListsService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'

export default {
  setup() {
    const state = reactive({
      list: computed(() => AppState.lists)
    })
    const route = useRoute()
    onMounted(async() => {
      try {
        await listsService.getLists(route.params.id)
      } catch (error) {
        Notification.toast(error)
      }
    })

    return {
      state,
      lists: computed(() => AppState.lists)
    }
  }

}
</script>

<style>

</style>

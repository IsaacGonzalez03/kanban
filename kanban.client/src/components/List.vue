<template>
  <div class="col-4">
    <div class="border">
      <i class="far fa-window-close float-right text-end text-secondary m-1" @click="deleteList(list.id, list.boardId)"></i>
      <h2>{{ list.title }}</h2>
    </div>
    <Task v-for="task in state.tasks" :key="task.id" :task="task" />
    <form @submit.prevent="createTask">
      <input type="text" v-model="state.newTask.title" class="form-control" placeholder="new task...">
    </form>
  </div>
</template>

<script>
import { listsService } from '../services/ListsService'
import Notification from '../utils/Notification'
import { onMounted, reactive } from '@vue/runtime-core'
import { tasksService } from '../services/TasksService'

export default {
  props: {
    list: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newTask: {}
    })
    onMounted(async() => await tasksService.getTasks(props.list.id))
    return {
      state,
      async deleteList(id, boardId) {
        try {
          await listsService.deleteList(id, boardId)
          Notification.confirmAction()
        } catch (error) {
          Notification.toast(error)
        }
      },
      async createTask() {
        try {
          state.newTask.listId = props.list.id
          await tasksService.createTask(state.newTask)
          state.newTask = {}
        } catch (error) {

        }
      }
    }
  }
}

</script>

<style>

</style>

<template>
  <div class="col-md-3">
    <div class="border">
      <i class="far fa-window-close float-right text-end text-secondary m-1" @click="deleteList(list.id)"></i>
      <h3>{{ list.title }}</h3>
      <p>^^title^^</p>
      <h3>{{ list.description }}</h3>
    </div>
    <Task v-for="task in state.tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import { listsService } from '../services/ListsService'
import Notification from '../utils/Notification'
import { onMounted, reactive } from '@vue/runtime-core'
import { tasksService } from '../services/TasksService'
import Task from './Task.vue'

export default {
  components: { Task },
  props: {
    list: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
    })
    onMounted(async() => tasksService.getTasks(props.list.id))
    return {
      state,
      async deleteList(id) {
        try {
          await listsService.deleteList(id)
        } catch (error) {
          Notification.toast(error)
        }
      }

    }
  }
}

</script>

<style>

</style>

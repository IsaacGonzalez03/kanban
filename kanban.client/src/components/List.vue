<template>
  <div class="card p-2 border-info" dropzone="zone" @dragover.prevent @drop.prevent="MoveItem">
    <div class="d-flex float-right">
      <i class="far fa-window-close float-right text-end text-secondary m-1" @click="deleteList(list.id, list.boardId)"></i>
    </div>
    <h1 class="ml-2 mt-2 mb-0">
      {{ list.title }}
    </h1>
    <transition-group name="item" tag="div" class="space-evenly mt-3">
      <Task v-for="task in state.tasks" @draggable="true" :key="task.id" :task="task" :list="list" />
    </transition-group>
    <form @submit.prevent="createTask" class="p-3">
      <input type="text" v-model="state.newTask.title" class="form-control" placeholder="new task...">
    </form>
    <div>
    </div>
  </div>
</template>

<script>
import { listsService } from '../services/ListsService'
import Notification from '../utils/Notification'
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { tasksService } from '../services/TasksService'
import { AppState } from '../AppState'

export default {
  props: {
    list: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newTask: {},
      tasks: computed(() => AppState.tasks[props.list.id])
    })
    onMounted(async() => await tasksService.getTasks(props.list.id))
    return {
      state,
      async deleteList(id, boardId) {
        try {
          await listsService.deleteList(id, boardId)
          Notification.toast('List Deleted', 'success')
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
      },
      MoveItem() {
        tasksService.MoveItem(props.list.id)
      }
    }
  }
}

</script>

<style>
.thick{
  border: 5px #00C9BD;
}

</style>

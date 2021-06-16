<template>
  <div class="col-md-3">
    <div class="border">
      <p>list items</p>
      <h3>{{ list.title }}</h3>
      <h3>{{ list.description }}</h3>
    </div>
    <Task v-for="task in state.tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
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
    return { state }
  }

}
</script>

<style>

</style>

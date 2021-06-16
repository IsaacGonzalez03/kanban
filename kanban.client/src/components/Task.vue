<template>
  <div class="task row">
    <div class="col">
      <div class="card">
        <h3 class="card-header">
        </h3>
        <form @submit.prevent="createTask" class="input-group p-4">
          <div class="input-group mb-3">
            <span class="input-group-text"></span>
            <input type="text" class="form-control" placeholder="task...">
          </div>
        </form>
      </div>
      <div>
        I am a task title
      </div>
      <div>
        i am a task descripton
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  props: {
    task: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      newTask: {},
      tasks: computed(() => AppState.tasks)
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="task row">
    <div class="col">
      <div class="card">
        <h3 class="card-header">
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" value="">
            </div>
            <input type="text" class="form-control" placeholder="task...">
          </div>
        </h3>
        <form @submit.prevent="createComment">
          <input type="text" placeholder="comment..." class="form-control">
        </form>
        <Comment v-for="comment in state.comment" :key="comment.id" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'Task',
  setup() {
    const state = reactive({
      comment: computed(() => AppState.comment)
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>

</style>

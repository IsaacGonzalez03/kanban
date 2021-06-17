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
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { commentsService } from '../services/CommentsService'

export default {
  props: {
    task: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newComment: {},
      comments: computed(() => AppState.comments)
    })
    onMounted(async() => {
      await commentsService.getComments(props.task.id)
    })
    return {
      state

    }
  }
}
</script>

<style lang="scss" scoped>

</style>

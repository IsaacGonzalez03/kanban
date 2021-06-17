<template>
  <div class="col">
    <div class="card">
      <h3 class="card-header">
      </h3>
    </div>
    <div>
      {{ task.title }}
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

<template>
  <p><i @click="deleteComment(comment.id)" class="fas fa-minus text-dager"></i>{{ comment.description }}</p>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { commentsService } from '../services/CommentsService'
export default {
  name: 'Comment',
  props: {
    comment: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
    })
    return {
      state,
      async deleteComment(id) {
        try {
          await commentsService.deleteComment(id, props.comment.taskId)
        } catch (error) {

        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

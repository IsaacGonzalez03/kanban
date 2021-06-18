<template>
  <div class="border">
    <p>
      <i @click="deleteComment(comment.id)" class="fas fa-minus text-dager">
      </i>
    </p>
    <img class="userPic" :src="comment.creator.picture">
    <p>{{ comment.description }}</p>
    <p>{{ comment.creator.name }}</p>
  </div>
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
.userPic {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
}
</style>

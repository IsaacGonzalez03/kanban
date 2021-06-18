<template>
  <div>
    <small @click="deleteComment(comment.id)" class="mt-3 ml-2 fas fa-minus text-danger mr-1"></small>
    <img class="userPic" :src="comment.creator.picture">
    <small class="fw-bold ">{{ comment.creator.name }}:<small /><small> {{ comment.description }}</small>
    </small>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { commentsService } from '../services/CommentsService'
import Notification from '../utils/Notification'
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
          Notification.toast('Comment Deleted', 'success')
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

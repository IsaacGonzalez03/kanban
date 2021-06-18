<template>
  <div class="" @dragstart="prepToMove">
    <p class="m-0 fs-4">
      <i @click="deleteTask(task.id)" class="far fa-window-close text-secondary fs-6"></i>
      {{ task.title }}
    </p>
    <form @submit.prevent="createComment" class="pl-3 pr-3">
      <input type="text" v-model="state.newComment.description" class="form-control" placeholder="comment on your task...">
    </form>
    <Comment v-for="comment in state.comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { tasksService } from '../services/TasksService'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { commentsService } from '../services/CommentsService'
import { logger } from '../utils/Logger'
import Notification from '../utils/Notification'

export default {
  props: {
    task: { type: Object, required: true },
    list: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      newComment: {},
      comments: computed(() => AppState.comments[props.task.id]),
      account: computed(() => AppState.account)
    })
    onMounted(async() => await commentsService.getComments(props.task.id))
    return {
      state,
      async deleteTask(id) {
        try {
          await tasksService.deleteTask(id, props.task.listId)
          Notification.toast('Task Deleted', 'success')
        } catch (error) {
        }
      },
      async createComment() {
        try {
          state.newComment.taskId = props.task.id
          await commentsService.createComment(state.newComment, state.account)
          state.newComment = {}
        } catch (error) {

        }
      },
      prepToMove() {
        tasksService.prepToMove(props.task, props.list.id)
        logger.log('prep to move', props.task.id, props.list.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.task-daddy {
  background-color: aquamarine;
}

</style>

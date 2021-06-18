<template>
  <div class="card task-daddy" @draggable="true" @dragstart="prepToMove">
    <div>
      <i @click="deleteTask(task.id)" class="far fa-window-close text-danger"></i><p>{{ task.title }}</p>
    </div>
    <form @submit.prevent="createComment">
      <input type="text" v-model="state.newComment.description" class="form-control" placeholder="comment...">
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
        logger.log('this tasks id', props.task.id, 'this lists is', props.list.id)
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

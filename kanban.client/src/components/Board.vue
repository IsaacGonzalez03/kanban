<template>
  <div class="col-3 m-4">
    <div class="card border-5 rounded-3 border-info mb-5">
      <i class="far fa-window-close float-right text-end text-secondary m-1" @click="deleteBoard(board.id)"></i>
      <router-link class="text-decoration-none" :to="{name: 'Board', params: { id: board.id}}" :key="board.id" @click="getBoardInfo(board.id)">
        <h1 class="font-monospace fw-bolder text-uppercase mb-4 p-5  text-center text-capitalize text-decoration-none ">
          {{ board.title }}
        </h1>
      </router-link>
      <i class="fas fa-pencil-alt float-right m-1" @click="showEditForm = !showEditForm"></i>
      <form @submit="editTitle(board.id)" v-if="showEditForm">
        <textarea class="form-control" placeholder="New Board Title" v-model="newBoard.title"></textarea>
        <button type="submit">
          edit title
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { boardsService } from '../services/BoardsService'
import { logger } from '../utils/Logger'

export default {
  props: {
    board: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
    })
    const newBoard = ref({})
    let showEditForm = ref(false)
    return {
      state,
      showEditForm,
      newBoard,
      getBoardInfo(id) {
        boardsService.getBoardInfo(id)
      },

      deleteBoard(id) {
        boardsService.deleteBoard(id)
        Notification.toast('List Deleted', 'success')
      },

      async editTitle(board) {
        await boardsService.editBoard(board, newBoard.value)
        logger.log('heres the ', board, newBoard.value)
        newBoard.value = {}
        showEditForm = ref(false)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.board-card {
  background-color: white;
  border: 2px solid black;
}
</style>

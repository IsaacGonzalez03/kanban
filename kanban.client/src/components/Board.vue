<template>
  <div class="col-3 m-4">
    <div class="card border-5 rounded-3 border-info mb-5">
      <i class="far fa-window-close float-right text-end text-secondary m-1"></i>
      <router-link class="text-decoration-none" :to="{name: 'Board', params: { id: board.id}}" :key="board.id" @click="getBoardInfo(board.id)">
        <h1 class="font-monospace fw-bolder text-uppercase mb-4 p-5  text-center text-capitalize text-decoration-none ">
          {{ board.title }}
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { boardsService } from '../services/BoardsService'

export default {
  props: {
    board: { type: Object, required: true }
  },
  setup() {
    const state = reactive({

    })
    return {
      state,
      getBoardInfo(id) {
        boardsService.getBoardInfo(id)
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

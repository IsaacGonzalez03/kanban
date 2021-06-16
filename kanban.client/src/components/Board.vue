<template>
  <div class="col-3 m-4">
    <router-link class="text-decoration-none" :to="{name: 'Board', params: { id: board.id}}" :key="board.id" @click="getBoardInfo(board.id)">
      <div class="card border-5 rounded-3 text-center border-info text-capitalize text-decoration-none mb-5">
        <h1 class="font-monospace fw-bolder text-uppercase m-0 p-5">
          {{ board.title }}
        </h1>
      </div>
    </router-link>
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

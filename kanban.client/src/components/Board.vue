<template>
  <div class="col-3 m-4 board-card">
    <router-link :to="{name: 'Board', params: { id: board.id }}" :key="board.id" @click="getBoardInfo(board.id)">
      <h1>{{ board.title }}</h1>
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

<template>
  <div class="container">
    <div class="row">
      <Board v-for="b in boards" :key="b.id" :board="b" />
    </div>
    <div class="row">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createBoardModal">
        Create Board
      </button>
      <div>
        <CreateBoardModal />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'Home',

  setup() {
    return {
      boards: computed(() => AppState.boards)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

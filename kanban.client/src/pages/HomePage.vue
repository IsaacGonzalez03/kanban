<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-end align-items-center">
        <button type="button" class="btn btn-info m-5 p-2 fw-bolder shadow-sm" data-toggle="modal" data-target="#createBoardModal">
          New Board <i class="fas fa-list-ul"></i>
        </button>
      </div>
    </div>
    <div class="row justify-content-around">
      <Board v-for="b in boards" :key="b.id" :board="b" />
    </div>
    <div class="row">
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

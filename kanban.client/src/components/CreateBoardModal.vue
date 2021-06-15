<template>
  <!-- Modal -->
  <div class="modal fade"
       id="createBoardModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBoard">
            <div class="form-group">
              <label for="board title"></label>
              <input v-model="state.info.title" class="form-control" placeholder="Board Title" type="text">
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { boardsService } from '../services/BoardsService'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      info: {}
    })
    return {
      state,
      async createBoard() {
        try {
          boardsService.createBoard(state.info)
        } catch (error) {
          Notification.toast(error)
        }
      }
    }
  }

}
</script>

<style>

</style>

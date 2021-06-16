<template>
  <div class="col-md-3">
    <div class="border">
      <i class="far fa-window-close float-right text-end text-secondary m-1" @click="deleteList(list.id)"></i>
      <h3>{{ list.title }}</h3>
      <p>^^title^^</p>
      <h3>{{ list.description }}</h3>
      <Task />
    </div>
  </div>
</template>

<script>
import { listsService } from '../services/ListsService'
import Notification from '../utils/Notification'
export default {
  props: {
    list: { type: Object, required: true }
  },
  setup() {
    return {
      async deleteList(id) {
        try {
          await listsService.deleteList(id)
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

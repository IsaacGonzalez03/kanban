<template>
  <div class="container-fluid">
    <div class="row">
      <h1>this is the board page</h1>
      <List v-for="l in lists" :key="l.id" :list="l" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { listsService } from '../services/ListsService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'

export default {
  setup() {
    const state = reactive({
      list: computed(() => AppState.lists)
    })
    const route = useRoute()
    onMounted(async() => {
      try {
        await listsService.getLists(route.params.id)
      } catch (error) {
        Notification.toast(error)
      }
    })

    return {
      state,
      lists: computed(() => AppState.lists)
    }
  }

}
</script>

<style>

</style>

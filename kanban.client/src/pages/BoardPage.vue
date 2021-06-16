<template>
  <h1>this is the board page</h1>
  <p>
    {{ state.list }}
  </p>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { listsService } from '../services/ListsService'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const state = reactive({

      list: computed(() => AppState.lists)
    })
    const route = useRoute()
    onMounted(async() => {
      await listsService.getLists(route.params.id)
    })
    return {
      state
    }
  }

}
</script>

<style>

</style>

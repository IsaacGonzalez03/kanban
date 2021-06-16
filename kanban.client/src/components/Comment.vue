<template>
  <div class="comment row">
    <div class="col card">
      <div class="card-body">
        <p>{{ comment.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'Comment',
  props: {
    comment: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>

</style>

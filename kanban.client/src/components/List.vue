<template>
  <div class="col-md-3">
    <div class="border">
      <p>list items</p>
      <h3>{{ list.title }}</h3>
      <h3>{{ list.description }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Object, required: true }
  },
  setup() {
    return {

    }
  }

}
</script>

<style>

</style>

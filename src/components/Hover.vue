<template>
  <div
    class="dans-hover"
    :style="{
      position: 'fixed',
      left,
      top,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Hover',
  props: {
    left: String,
    top: String,
  },
}

</script>

<style>

.dans-hover {
  background-color: white;
  padding: 1rem;
}

</style>

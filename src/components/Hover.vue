<template>
  <div
    class="dans-hover"
    :style="{
      position: 'fixed',
      left,
      top,
      'background-color': backgroundColor,
      padding,
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
    backgroundColor: {
      type: String,
      default: 'white',
    },
    padding: {
      type: String,
      default: '1rem',
    },
  },
}

</script>

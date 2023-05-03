<template>
  <span
    class="dans-click-show"
    :style="{
      'box-shadow': `0px 0px 5px 0px rgba(128, 0, 128, ${cappedClicks / 4})`,
      'background-color': `rgba(128, 0, 128, ${cappedClicks / 8})`,
    }"
    @click="clicked"
  >
    <slot></slot>
  </span>
</template>

<script>

export default {
  data() {
    return {
      clicks: 0,
    };
  },
  computed: {
    cappedClicks() {
      return Math.min(this.clicks, 4);
    },
  },
  methods: {
    clicked() {
      this.clicks += 1;
    },
  },
};

</script>

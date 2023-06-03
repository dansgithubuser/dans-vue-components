<template>
  <div class="dans-modal">
    <button @click="toggle()">{{ buttonText }}</button>
    <div
      class="dans-modal-fixed"
      v-if="show"
      @click="toggle(false)"
    >
      <div
        class="dans-modal-background"
        ref="background"
        @click.stop
      >
        <div
          class="dans-modal-content"
          v-bind="$attrs"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    buttonText: String,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle(show) {
      if (show === undefined) {
        this.show = !this.show;
      } else {
        this.show = show;
      }
    },
    scroll(e) {
      e.preventDefault();
      this.$refs.background.scrollBy(e.deltaX, e.deltaY);
    },
    esc(e) {
      if (e.key !== 'Escape') return;
      this.toggle(false);
    },
  },
  watch: {
    show() {
      if (this.show) {
        document.addEventListener(
          'wheel',
          this.scroll,
          { passive: false },
        );
        document.addEventListener(
          'keydown',
          this.esc,
        );
      } else {
        document.removeEventListener(
          'wheel',
          this.scroll,
        );
        document.removeEventListener(
          'keydown',
          this.esc,
        );
      }
    },
  },
  inheritAttrs: false,
}

</script>

<style scoped>

.dans-modal-fixed {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.dans-modal-background {
  background-color: white;
  max-height: calc(100vh - 2rem);
  max-width: calc(100vw - 2rem);
  overflow-y: scroll;
  overscroll-behavior: contain;
}

</style>

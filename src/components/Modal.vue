<template>
  <div class="dans-modal">
    <button v-if="buttonText" @click="toggle()">{{ buttonText }}</button>
    <div
      class="dans-modal-fixed"
      v-if="d_show"
      @click="toggle(false)"
    >
      <div
        class="dans-modal-background"
        ref="background"
        @click.stop
      >
        <div :class="containerClass">
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
    show: Boolean,
    buttonText: String,
    containerClass: {
      default: 'dans-modal-container-default',
    },
  },
  emits: ['toggle'],
  data() {
    return {
      d_show: false,
    };
  },
  methods: {
    toggle(show) {
      const show_ = show === undefined ? !this.show : show;
      this.$emit('toggle', show_);
      this.$nextTick(() => this.d_show = show_);
    },
    scroll(e) {
      e.preventDefault();
      this.$refs.background.scrollBy(e.deltaX, e.deltaY);
    },
    esc(e) {
      if (e.key !== 'Escape') return;
      this.toggle(false);
    },
    addListeners() {
      document.addEventListener(
        'wheel',
        this.scroll,
        { passive: false },
      );
      document.addEventListener(
        'keydown',
        this.esc,
      );
    },
    removeListeners() {
      document.removeEventListener(
        'wheel',
        this.scroll,
      );
      document.removeEventListener(
        'keydown',
        this.esc,
      );
    },
  },
  unmounted() {
    this.removeListeners();
  },
  watch: {
    show() {
      this.d_show = this.show;
    },
    d_show() {
      if (this.d_show) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
  },
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

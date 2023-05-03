<template>
  <div ref="self" class="dans-collapse">
    <div class="dans-collapse-header" @click="toggle()">
      <div>{{ label }}</div>
      <div v-if="kbKey" class="dans-label">&nbsp;({{ kbKey }})</div>
      <div v-if="collapsed" class="mal">+</div>
      <div v-else class="mal">−</div>
    </div>
    <div v-if="!collapsed" class="dans-collapse-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Collapse',
  props: {
    label: String,
    kbKey: String,
  },
  data() {
    return {
      collapsed: true,
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
    async handleKbEvent(event) {
      if (event.key === this.kbKey) {
        this.toggle();
        if (!this.collapsed) {
          await this.$nextTick();
          this.$refs.self.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    },
  },
  mounted() {
    if (this.kbKey) {
      window.addEventListener('keydown', this.handleKbEvent);
    }
  },
  unmounted() {
    if (this.kbKey) {
      window.removeEventListener('keydown', this.handleKbEvent);
    }
  },
}

</script>

<style scoped>

.dans-collapse-header {
  border-bottom: 1px solid grey;
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.dans-collapse-body {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 1rem;
  box-shadow: 0px 0px 0.25rem grey inset;
}

</style>

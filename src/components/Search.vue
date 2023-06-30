<template>
  <div class="dans-search">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <div>
      <input
        :id="d_id"
        type="search"
        :list="listId"
        :value="modelValue"
        @change="pause ? pauseValue = $event.target.value : $emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      >
    </div>
    <datalist :id="listId">
      <option v-for="option in options" :key="option" :value="option" />
    </datalist>
  </div>
</template>

<script>

export default {
  name: 'Search',
  props: {
    modelValue: {},
    label: String,
    options: Array,
    pause: {
      type: Boolean,
      default: false,
    },
    id: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      pauseValue: this.modelValue,
      listId: self.crypto.randomUUID(),
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
  inheritAttrs: false,
  watch: {
    pause() {
      if (this.pause) {
        this.pauseValue = this.modelValue;
      } else {
        this.$emit('update:modelValue', this.pauseValue);
      }
    },
  },
}

</script>

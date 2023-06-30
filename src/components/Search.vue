<template>
  <div class="dans-search">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <div>
      <input
        :id="d_id"
        type="search"
        :list="listId"
        v-model="innerValue"
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
    delay: {
      type: Number,
      default: 0,
    },
    id: {},
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  data() {
    return {
      innerValue: this.modelValue,
      timeout: null,
      listId: self.crypto.randomUUID(),
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
  watch: {
    innerValue() {
      if (!this.delay) {
        this.emit();
      } else {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(
          () => this.emit(),
          1000 * this.delay,
        );
      }
    },
  },
  methods: {
    emit() {
      this.$emit('update:modelValue', this.innerValue);
    },
  },
}

</script>

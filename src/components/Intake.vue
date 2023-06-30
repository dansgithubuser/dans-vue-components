<template>
  <div class="dans-intake">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <input
      :id="d_id"
      v-model="innerValue"
      v-bind="$attrs"
    >
  </div>
</template>

<script>

export default {
  name: 'Intake',
  props: {
    modelValue: {},
    label: String,
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

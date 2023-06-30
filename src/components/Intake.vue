<template>
  <div class="dans-intake">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <input
      :id="d_id"
      :value="modelValue"
      @change="pause ? pauseValue = $event.target.value : $emit('update:modelValue', $event.target.value)"
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
    pause: {
      type: Boolean,
      default: false,
    },
    id: {},
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  data() {
    return {
      pauseValue: this.modelValue,
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
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

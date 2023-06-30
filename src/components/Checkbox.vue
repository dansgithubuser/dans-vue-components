<template>
  <div class="dans-checkbox">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <input
      type="checkbox"
      :id="d_id"
      :checked="modelValue"
      @change="pause ? pauseValue = $event.target.checked : $emit('update:modelValue', $event.target.checked)"
    >
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    label: String,
    pause: {
      type: Boolean,
      default: false,
    },
    id: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
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

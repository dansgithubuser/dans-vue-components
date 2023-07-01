<template>
  <div class="dans-checkbox">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <div style="display: flex">
      <input
        type="checkbox"
        :id="d_id"
        :checked="modelValue"
        @change="pause ? pauseValue = $event.target.checked : $emit('update:modelValue', $event.target.checked)"
        class="dans-checkbox-input"
      >
      <input
        style="
          max-width: 0;
          padding-left: 0;
          padding-right: 0;
          border-left: 0;
          border-right: 0;
          visibility: hidden;
        "
      >
    </div>
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

<style>

.dans-checkbox-input {
  margin: 0;
}

</style>

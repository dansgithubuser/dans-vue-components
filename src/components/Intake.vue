<template>
  <div class="dans-intake">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <input
      :id="d_id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
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
    id: {},
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  data() {
    return {
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
}

</script>

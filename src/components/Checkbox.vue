<template>
  <div class="dans-checkbox">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <input
      type="checkbox"
      :id="d_id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    label: String,
    id: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
}

</script>

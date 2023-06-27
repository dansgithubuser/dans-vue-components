<template>
  <div class="dans-checkbox">
    <label v-if="label" class="dans-label" :for="_id">{{ label }}</label>
    <input
      type="checkbox"
      :id="_id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    modelValue: {},
    label: String,
    id: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      _id: this.id || self.crypto.randomUUID(),
    };
  },
}

</script>

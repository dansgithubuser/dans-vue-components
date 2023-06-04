<template>
  <div class="dans-input">
    <div v-if="label" class="dans-label">{{ label }}</div>
    <div>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    modelValue: {},
    label: String,
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
}

</script>

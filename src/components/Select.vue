<template>
  <div class="dans-select">
    <div v-if="label" class="dans-label">{{ label }}</div>
    <select
      class="dans-select"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option v-for="option in options" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'Select',
  props: {
    modelValue: {},
    label: String,
    options: Array,
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
}

</script>

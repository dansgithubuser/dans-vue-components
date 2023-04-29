<template>
  <div class="d-text-input">
    <div>
      <small>{{ label }}</small>
    </div>
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
  props: {
    modelValue: {},
    label: String,
  },
  emits: ['update:modelValue'],
}

</script>

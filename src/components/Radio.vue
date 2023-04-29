<template>
  <div class="dans-radio">
    <div v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="`${option.value}-${name}`"
        :name="name"
        :value="option.value"
        @input="$emit('update:modelValue', option.value)"
      >
      <label :for="`${option.value}-${name}`">
        {{ option.name }}
      </label>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    modelValue: {},
    name: {
      default: self.crypto.randomUUID(),
    },
    options: Array,
  },
  emits: ['update:modelValue'],
}

</script>

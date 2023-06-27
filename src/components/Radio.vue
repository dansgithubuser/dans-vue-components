<template>
  <div class="dans-radio">
    <div v-if="label" class="dans-label">{{ label }}</div>
    <div v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="`${option.value}-${_name}`"
        :name="_name"
        :value="option.value"
        @input="$emit('update:modelValue', option.value)"
      >
      <label :for="`${option.value}-${_name}`">
        {{ option.name }}
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Radio',
  props: {
    modelValue: {},
    label: String,
    name,
    options: Array,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      _name: this.name || self.crypto.randomUUID(),
    };
  },
}

</script>

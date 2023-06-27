<template>
  <div class="dans-radio">
    <div v-if="label" class="dans-label">{{ label }}</div>
    <div v-for="(option, index) in options" :key="option.value">
      <input
        type="radio"
        :id="`${_id}--${index}`"
        :name="name"
        :value="option.value"
        @input="$emit('update:modelValue', option.value)"
      >
      <label :for="`${_id}--${index}`">
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

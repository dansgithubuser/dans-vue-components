<template>
  <div class="dans-intake">
    <label v-if="label" class="dans-label" :for="_name">{{ label }}</label>
    <input
      :id="_name"
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
    name,
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  data() {
    return {
      _name: this.name || self.crypto.randomUUID(),
    };
  },
}

</script>

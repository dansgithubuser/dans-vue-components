<template>
  <div class="dans-dropdown">
    <label v-if="label" class="dans-label" :for="_id">{{ label }}</label>
    <select
      :id="_id"
      class="dans-dropdown"
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
  name: 'Dropdown',
  props: {
    modelValue: {},
    label: String,
    options: Array,
    id: {},
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  data() {
    return {
      _id: this.id || self.crypto.randomUUID(),
    };
  },
}

</script>

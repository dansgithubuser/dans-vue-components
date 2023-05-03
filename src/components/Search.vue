<template>
  <div class="dans-search">
    <div class="dans-label">{{ label }}</div>
    <div>
      <input
        type="search"
        :list="uuid"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </div>
    <datalist :id="uuid">
      <option v-for="option in options" :key="option" :value="option" />
    </datalist>
  </div>
</template>

<script>

export default {
  name: 'Search',
  props: {
    modelValue: {},
    label: String,
    options: Array,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      uuid: self.crypto.randomUUID(),
    };
  },
}

</script>

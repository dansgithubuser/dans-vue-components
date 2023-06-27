<template>
  <div class="dans-search">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <div>
      <input
        :id="d_id"
        type="search"
        :list="listId"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      >
    </div>
    <datalist :id="listId">
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
    id: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      listId: self.crypto.randomUUID(),
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
  inheritAttrs: false,
}

</script>

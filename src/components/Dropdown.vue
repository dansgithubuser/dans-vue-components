<template>
  <div class="dans-dropdown">
    <label v-if="label" class="dans-label" :for="d_id">{{ label }}</label>
    <select
      :id="d_id"
      class="dans-dropdown"
      :value="modelValue"
      @input="pause ? pauseValue = $event.target.value : $emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option v-for="option in options" :value="optionValue(option)">
        {{ optionName(option) }}
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
    pause: {
      type: Boolean,
      default: false,
    },
    id: {},
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  data() {
    return {
      d_id: this.id || self.crypto.randomUUID(),
    };
  },
  methods: {
    optionName(option) {
      if (option?.name) return option.name;
      return option;
    },
    optionValue(option) {
      if (option?.value) return option.value;
      return option;
    },
  },
  watch: {
    pause() {
      if (this.pause) {
        this.pauseValue = this.modelValue;
      } else {
        this.$emit('update:modelValue', this.pauseValue);
      }
    },
  },
}

</script>

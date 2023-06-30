<template>
  <div class="dans-radio">
    <div v-if="label" class="dans-label">{{ label }}</div>
    <div v-for="(option, index) in options" :key="option.value">
      <input
        type="radio"
        :id="`${d_id}--${index}`"
        :name="name"
        :value="option.value"
        @input="pause ? pauseValue = option.value : $emit('update:modelValue', option.value)"
      >
      <label :for="`${d_id}--${index}`">
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
    pause: {
      type: Boolean,
      default: false,
    },
    id: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      pauseValue: this.modelValue,
      d_id: this.id || self.crypto.randomUUID(),
    };
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

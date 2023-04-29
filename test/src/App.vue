<script setup>

import TextInput from '../../src/components/TextInput.vue'

</script>

<template>
  <TextInput v-model="sin" label="SIN" @keyup.enter="alert(sin)" />
</template>

<script>

export default {
  data() {
    return {
      sin: '',
      console: window.console,
    };
  },
  methods: {
    alert(msg) {
      alert(msg);
    },
  },
};

</script>

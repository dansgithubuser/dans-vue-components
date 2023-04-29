<script setup>

import { default as DansInput } from '../../src/components/Input.vue';

</script>

<template>
  <form>
    <DansInput
      v-model="sin"
      label="SIN"
      @keyup.enter="alert(sin)"
    />
    <DansInput
      v-model="phoneNumber"
      type="number"
      label="phone number"
      @keyup.enter="alert(phoneNumber)"
    />
    <input type="submit" value="submit">
  </form>
</template>

<script>

export default {
  data() {
    return {
      sin: '',
      phoneNumber: 0,
    };
  },
  methods: {
    alert(msg) {
      alert(msg);
    },
  },
};

</script>

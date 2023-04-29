<script setup>

import { default as DansInput } from '../../src/components/Input.vue';
import Radio from '../../src/components/Radio.vue';

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
    <Radio
      v-model="flavor"
      :options="[
        { name: 'French Vanilla', value: 'vanilla' },
        { name: 'Chocolate Supreme', value: 'chocolate' },
        { name: 'Fruit Party', value: 'strawberry' },
        { name: 'Other', value: null },
      ]"
    />
    <p>selected flavor is: {{ flavor }}</p>
    <input type="submit" value="submit">
  </form>
</template>

<script>

export default {
  data() {
    return {
      sin: '',
      phoneNumber: 0,
      flavor: null,
    };
  },
  methods: {
    alert(msg) {
      alert(msg);
    },
  },
};

</script>

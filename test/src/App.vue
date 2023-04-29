<script setup>

import { default as DansInput } from '../../src/components/Input.vue';
import Radio from '../../src/components/Radio.vue';
import Plot from '../../src/components/Plot.vue';
import Collapse from '../../src/components/Collapse.vue';

import '../../src/dans.css';

</script>

<template>
  <form class="spaced">
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
  <Plot
    :width="plotWidth"
    :height="400"
    :entries="plotEntries"
    @keydown="alert($event.key)"
  />
  <Collapse label="Secret Books" class="m1t">
    <div>Necronomicon</div>
    <div>Horcruxes</div>
    <div>Introduction to Necromancy</div>
  </Collapse>
  <div class="col spaced">
    <a href="https://www.duckduckgo.com" target="_blank">duckduckgo</a>
  </div>
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
  computed: {
    plotWidth() {
      return window.innerWidth - 16;
    },
    plotEntries() {
      const vertices = [];
      for (let i = 0; i < 10000; ++i) {
        const x = Math.random();
        const y = Math.random() * Math.random();
        vertices.push({
          x,
          y,
          r: Math.random() * x,
          g: Math.random() * y,
          b: Math.random() * ((2 * x - 1) ** 2 + (2 * y - 1) ** 2),
          a: Math.random() / 8,
        });
      }
      return [
        {
          name: '1',
          usage: 'static',
          mode: 'lines',
          vertices,
        },
      ];
    },
  },
  methods: {
    alert(msg) {
      alert(msg);
    },
  },
};

</script>

---
layout: home
---

:::playground
```vue
<template>
  <div>playground  test</div>
  <button @click="count += 1">{{count}}</button>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(1)
</script>
<style scoped>
div {
  color: red;
}
</style>

\``` # remove slash
:::

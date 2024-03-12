<template>
  <div>
    <button id="counter" @click="increment">{{ count }}</button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
  count.value++

  // DOM 还未更新
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick(()=>{
    console.log('回调函数执行');
  })
  // DOM 此时已经更新
  console.log(document.getElementById('counter').textContent) // 1
}
</script>

<style lang="scss" scoped>

</style>
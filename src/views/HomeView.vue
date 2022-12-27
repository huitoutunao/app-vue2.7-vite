<template>
  <div class="page">
    {{ sayHi }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'
import { useCounterStore } from '@/store/counter'
import { isDev } from '@/utils'

const $route = useRoute()
const $router = useRouter()
console.log($route)
console.log($router)

console.log(isDev())
console.log(import.meta.env.VITE_VERSION_TYPE)

const counter = useCounterStore()
counter.increment()
console.log('counter', counter.doubleCount)

const sayHi = ref('hello world')
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>

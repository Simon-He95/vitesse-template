<script lang="ts" setup>
import { useInc } from '../composables/inc'
const [n, inc] = useInc()
</script>

<template>
  <div class="custom-color" @click="inc()">
    ----- counter: {{ n }} -------
  </div>
</template>

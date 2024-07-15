<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>Hi, {{ props.name }}</p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="btn m3 text-sm mt8" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>

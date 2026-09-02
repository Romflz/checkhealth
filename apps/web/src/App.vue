<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { GetHealth } from '@checkhealth/shared'

const data = ref<GetHealth | null>(null)

onMounted(async () => {
  const res = await fetch('/api/health')
  data.value = (await res.json()) as GetHealth
})
</script>

<template>
    <p v-if="data">{{ data.msg }}</p>
</template>
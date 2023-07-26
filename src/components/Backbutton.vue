<template>
  <RouterLink class="text-decoration-none h1 p-2 m-n2" :to="to"
    ><v-btn icon="fas fa-angle-left" color="black" class="mt-n1 ms-n3 me-n2" variant="plain"></v-btn
  ></RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ to: string }>()
</script>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
</script>

<template>
  <AppLayout>
    <h2>Hello {{ auth.user?.name }}</h2>
    <h4>You are logged in!</h4>
  </AppLayout>
</template>

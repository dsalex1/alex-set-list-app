<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { RouterLink } from 'vue-router'

const APP_SHORT_NAME = import.meta.env.VITE_APP_SHORT_NAME

const auth = useAuth()
</script>
<template>
  <v-app>
    <v-toolbar color="primary" dark class="sticky-top">
      

      <RouterLink to="/home"><img style="filter: invert()" src="@/assets/logo.svg" width="40" height="40" class="mx-3 mt-2" /> {{ APP_SHORT_NAME }}</RouterLink>
      <v-spacer></v-spacer>

      <span class="me-3">{{ auth.user?.email }}</span>
      <v-btn prepend-icon="fas fa-sign-out" color="white" variant="outlined" @click="auth.logout">Logout</v-btn>
    </v-toolbar>

    <v-container><slot></slot></v-container>
  </v-app>
</template>

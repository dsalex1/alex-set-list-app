<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { RouterLink } from 'vue-router'

const APP_SHORT_NAME = import.meta.env.VITE_APP_SHORT_NAME

const auth = useAuth()
</script>
<template>
  <v-app>
    <v-toolbar color="primary" dark class="sticky-top">
      <img src="@/assets/logo-128.png" width="40" height="40" class="mx-3" />

      <RouterLink to="/home"><v-btn prepend-icon="fas fa-home" color="primary" variant="flat">Home</v-btn></RouterLink>
      <RouterLink to="/user"><v-btn prepend-icon="fas fa-user" color="primary" variant="flat">Users</v-btn></RouterLink>

      <v-spacer></v-spacer>

      <span class="me-3">{{ auth.user?.name }}</span>
      <v-btn prepend-icon="fas fa-sign-out" color="white" variant="outlined" @click="auth.logout">Logout</v-btn>
    </v-toolbar>

    <v-container><slot></slot></v-container>
  </v-app>
</template>

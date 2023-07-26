<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { RouterLink } from 'vue-router'

const APP_SHORT_NAME = import.meta.env.VITE_APP_SHORT_NAME

const auth = useAuth()
</script>
<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo-128.png" alt="" width="32" height="32" class="d-inline-block align-text-top" />
        {{ APP_SHORT_NAME }}
      </a>
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/home">Home</RouterLink>
        </li>
      </ul>
      <div class="d-flex align-items-center">
        <span class="text-light me-2">{{ auth.user?.name }}</span>
        <button class="btn btn-outline-light" @click="auth.logout">Logout</button>
      </div>
    </div>
  </nav>

  <div class="container pt-3"><slot></slot></div>
</template>

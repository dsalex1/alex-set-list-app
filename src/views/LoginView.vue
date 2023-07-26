<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { auth } from '@/plugins/firebase'
import { useAuth } from '@/stores/auth'
import { sendPasswordResetEmail } from '@firebase/auth'
import { reactive, ref } from 'vue'

const authStore = useAuth()
const error = ref('')
const loading = ref(false)
const success = ref('')

const user = reactive({
  email: '',
  password: '',
})

async function forgetPassword() {
  await sendPasswordResetEmail(auth, user.email)
  success.value = 'Password reset email sent.'
  error.value = ''
}
const login = async () => {
  loading.value = true
  error.value = ''
  try {
    if (!user.email) return (error.value = 'Please enter your email address.')
    if (!user.password) return (error.value = 'Please enter your password.')

    await authStore.login(user.email, user.password)
  } catch (e) {
    error.value = 'Wrong credentials.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <!-- spinner while use rin undefined-->
  <div class="container d-flex flex-column align-items-center" style="max-width: 400px">
    <img class="my-4 border border-grey bg-white rounded" src="@/assets/logo-128.png" alt="logo" />
    <div v-if="authStore.user === undefined" class="d-flex justify-content-center mt-5">
      <LoadingSpinner />
    </div>
    <div v-else class="card card-body flex-grow-0 w-100">
      <h2>Login</h2>
      <div class="alert alert-success mt-2" v-if="success">{{ success }}</div>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="user.email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="user.password" type="password" class="form-control" />
        </div>
        <div class="form-group">
          <p class="text-danger" v-if="error">{{ error }}</p>
        </div>

        <LoadingSpinner v-if="loading" />
        <button v-else type="submit" class="btn btn-primary">Login</button>
        <button role="button" class="btn btn-link" @click="forgetPassword" v-if="error">Forgot password?</button>
      </form>
    </div>
  </div>
</template>

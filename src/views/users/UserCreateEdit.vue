<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppLayoutVue from '@/layouts/AppLayout.vue'
import { auth, userCollection, withoutFields } from '@/plugins/firebase'
import { User } from '@/types'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { addDoc } from 'firebase/firestore'
import { ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const user = ref<User & { password: string }>({
  id: '',
  name: '',
  role: 'school',
  email: '',
  password: '',
  schoolNumber: '',
  contactName: '',
  contactPhone: '',
  curriculumTypes: [],
})

const loading = ref(false)
async function createUser() {
  loading.value = true
  const id = await registerUser(user.value.email, user.value.password)
  await addDoc(userCollection, {
    id: id!,
    ...withoutFields(user.value, 'id'),
  })
  router.push(`/user`)
  loading.value = false
}

async function registerUser(email: string, password: string) {
  const currentUser = auth.currentUser
  await createUserWithEmailAndPassword(auth, email, password)
  const id = currentUser?.uid
  await auth.updateCurrentUser(currentUser)
  return id
}
</script>

<template>
  <AppLayoutVue>
    <h2>
      <RouterLink class="text-decoration-none h1 p-2 m-n2" to="/user">‹</RouterLink>
      Create
      <span class="text-secondary fw-bold">User</span>
    </h2>
    <form @submit.prevent="createUser">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input class="form-control" type="text" v-model="user.name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input class="form-control" type="text" v-model="user.email" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input class="form-control" minlength="6" type="text" v-model="user.password" />
      </div>
      <div class="mb-3">
        <label class="form-label">Role</label>
        <select class="form-select" v-model="user.role">
          <option value="school">School</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <template v-if="user.role == 'school'">
        <div class="mb-3">
          <label class="form-label">School Number</label>
          <input class="form-control" type="text" v-model="user.schoolNumber" />
        </div>
        <div class="mb-3">
          <label class="form-label">Contact Name</label>
          <input class="form-control" type="text" v-model="user.contactName" />
        </div>
        <div class="mb-3">
          <label class="form-label">Contact Phone</label>
          <input class="form-control" type="text" v-model="user.contactPhone" />
        </div>
        <div class="mb-3">
          <label class="form-label">Curriculum Types</label>
          <select class="form-select" multiple v-model="user.curriculumTypes">
            <option value="GS">Grundschule</option>
            <option value="SEKI">Sekundarstufe I</option>
            <option value="SEKII">Sekundarstufe II</option>
          </select>
        </div>
      </template>
      <LoadingSpinner v-if="loading" />
      <button v-else class="btn btn-primary">Create User</button>
    </form>
  </AppLayoutVue>
</template>

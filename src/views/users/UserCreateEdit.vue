<script setup lang="ts">
import Backbutton from '@/components/Backbutton.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppLayoutVue from '@/layouts/AppLayout.vue'
import { auth, userCollection, withoutFields } from '@/plugins/firebase'
import { User } from '@/types'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { addDoc, doc, updateDoc } from 'firebase/firestore'
import { computed, ref, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { useDocument } from 'vuefire'

const route = useRoute()
const router = useRouter()

const userId = route.params.id as string

const formMode = userId ? 'edit' : 'create'

const userDocRef = userId ? doc(userCollection, userId) : null
const userData = userId ? useDocument(userDocRef) : null
if (userData)
  watch(userData, (data) => {
    if (!data) return
    user.value = {
      curriculumTypes: [],
      schoolNumber: '',
      contactName: '',
      contactPhone: '',
      password: '******',
      ...data,
    }
  })
const user = ref({
  id: '',
  name: '',
  role: 'school',
  email: '',
  password: '',
  schoolNumber: '',
  contactName: '',
  contactPhone: '',
  curriculumTypes: [] as ('GS' | 'SEKI' | 'SEKII')[],
})

const error = ref('')
const loading = ref(false)

async function createUpdateUser(event) {
  if (!(await event).valid) return

  error.value = ''
  loading.value = true
  try {
    if (formMode == 'create' && 'password' in user?.value!) {
      const id = await registerUser(user.value.email, user?.value.password)
      await addDoc(userCollection, {
        ...withoutFields(user.value, 'id', 'password'),
        id: id!,
      })
    } else {
      await updateDoc(userDocRef!, withoutFields(user?.value!, 'id', 'password'))
    }
    router.push(`/user`)
  } catch (e) {
    console.log(e)
    if (e.code === 'auth/email-already-in-use') error.value = 'This email is already in use.'
    else error.value = 'An unknown error occurred.'
  }
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
      <Backbutton to="/user" />
      {{ formMode == 'create' ? 'Create' : 'Update' }} User
    </h2>
    <v-alert color="error" class="mb-2" v-if="error" :text="error"></v-alert>
    <LoadingSpinner v-if="!user" />
    <v-form v-else @submit.prevent="createUpdateUser">
      <v-row>
        <v-text-field
          :rules="[(v) => !!v || 'Please enter a Name.']"
          v-model="user.name"
          label="Name"
          class="v-col-12 pb-0"
        ></v-text-field>
        <v-text-field
          :rules="[(v) => formMode != 'create' || !!v || 'Please enter an Email.']"
          v-model="user.email"
          label="Email"
          :disabled="formMode == 'edit'"
          type="email"
          class="v-col-6 py-0"
        ></v-text-field>
        <v-text-field
          :rules="[(v) => formMode != 'create' || !!v || 'Please enter a Password.']"
          v-model="(user as any).password"
          :disabled="formMode == 'edit'"
          label="Password"
          class="v-col-6 py-0"
        ></v-text-field>
        <v-select v-model="user.role" label="Role" :items="['school', 'admin']" class="v-col-12"> </v-select>
        <template v-if="user.role == 'school'">
          <v-text-field
            :rules="[(v) => !!v || 'Please enter a School Number.']"
            v-model="user.schoolNumber"
            label="School Number"
            class="v-col-6 py-0"
          ></v-text-field>
          <v-text-field
            :rules="[(v) => !!v || 'Please enter a Contact Name.']"
            v-model="user.contactName"
            label="Contact Name"
            class="v-col-6 py-0"
          ></v-text-field>
          <v-text-field
            :rules="[(v) => !!v || 'Please enter a Contact Phone.']"
            v-model="user.contactPhone"
            label="Contact Phone"
            type="tel"
            class="v-col-6 py-0"
          ></v-text-field>
          <v-select
            chips
            :rules="[(v) => v.length > 0 || 'Please select a Curriculum Type.']"
            v-model="user.curriculumTypes"
            label="Curriculum Types"
            multiple
            :items="['GS', 'SEKI', 'SEKII']"
            class="v-col-6 py-0"
          >
          </v-select>
        </template>
      </v-row>

      <v-btn :loading="loading" color="primary" type="submit" class="mt-4">
        {{ formMode == 'create' ? 'Create' : 'Update' }} User
      </v-btn>
    </v-form>
  </AppLayoutVue>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { moduleCollection, userCollection } from '@/plugins/firebase'
import { deleteDoc, doc, query, where } from 'firebase/firestore'
import type { RouterLink } from 'vue-router'
import { useCollection } from 'vuefire'
import { User } from '@/types'
import { type Query } from '@firebase/firestore'
import { VDataTableVirtual } from 'vuetify/labs/VDataTable'

const schools = useCollection(query(userCollection, where('role', '==', 'school')) as Query<User & { role: 'school' }>)
const admins = useCollection(query(userCollection, where('role', '==', 'admin')) as Query<User & { role: 'admin' }>)
const console = window.console
async function deleteUser(uid: string) {
  if (!confirm('Are you sure you want to delete this user?')) return
  await deleteDoc(doc(userCollection, uid))

  await Promise.all(
    useCollection(query(moduleCollection, where('userId', '==', uid))).value.map(async (module) => {
      await deleteDoc(doc(moduleCollection, module.id))
    })
  )
}
</script>
<template>
  <AppLayout>
    <h2 class="mb-2 d-flex align-end">
      <div class="text-h5 flex-grow-1">Schools</div>
      <RouterLink class="" to="/user/create">
        <v-btn prepend-icon="fas fa-plus" color="primary">Create User</v-btn>
      </RouterLink>
    </h2>
    <v-data-table-virtual
      :headers="[
        { title: 'School Name', key: 'name' },
        { title: 'School Number', key: 'schoolNumber' },
        { title: 'School Email', key: 'email' },
        { title: '', align: 'end', key: 'actions' },
      ]"
      :items="schools"
      class="elevation-1"
      maxheight="400"
      item-value="name"
    >
      <template v-slot:item.actions="{ item: { raw } }">
        <RouterLink :to="`/User/${raw.id}/edit`" class="me-2">
          <v-btn prepend-icon="fas fa-pen" color="primary">Edit</v-btn>
        </RouterLink>
        <v-btn @click.stop="deleteUser(raw.id)" prepend-icon="fas fa-trash" color="error">Delete</v-btn>
      </template>
    </v-data-table-virtual>

    <h2 class="text-h5 mb-2 mt-4">Admins</h2>

    <v-data-table-virtual
      :headers="[
        { title: 'School Name', key: 'name' },
        { title: 'School Email', key: 'email' },
        { title: '', align: 'end', key: 'actions' },
      ]"
      :items="admins"
      class="elevation-1"
      maxheight="400"
      item-value="name"
    >
      <template v-slot:item.actions="{ item: { raw } }">
        <RouterLink :to="`/User/${raw.id}/edit`" class="me-2">
          <v-btn prepend-icon="fas fa-pen" color="primary">Edit</v-btn>
        </RouterLink>
        <v-btn @click.stop="deleteUser(raw.id)" prepend-icon="fas fa-trash" color="error">Delete</v-btn>
      </template>
    </v-data-table-virtual>
    <div v-if="admins.length == 0" class="alert alert-info">No admins found.</div>
  </AppLayout>
</template>

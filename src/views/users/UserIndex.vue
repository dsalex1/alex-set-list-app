<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { moduleCollection, userCollection } from '@/plugins/firebase'
import { deleteDoc, doc, query, where } from 'firebase/firestore'
import type { RouterLink } from 'vue-router'
import { useCollection } from 'vuefire'
import { User } from '@/types'
import { type Query } from '@firebase/firestore'

const schools = useCollection(query(userCollection, where('role', '==', 'school')) as Query<User & { role: 'school' }>)
const admins = useCollection(query(userCollection, where('role', '==', 'admin')) as Query<User & { role: 'admin' }>)

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
    <h2 class="clearfix">
      <span class="text-secondary fw-bold">Schools</span>
      <RouterLink class="btn btn-primary float-end mb-2" :to="`/user/create`">+ Create User</RouterLink>
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">School Name</th>
          <th scope="col">School Number</th>
          <th scope="col">School Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="school in schools" :key="school.id">
          <td>{{ school.name }}</td>
          <td>{{ school.schoolNumber }}</td>
          <td>{{ school.email }}</td>
          <td class="text-end">
            <RouterLink :to="`/User/${school.id}/edit`" class="py-1 my-n1 me-2 btn btn-primary">Edit</RouterLink>
            <button @click.stop="deleteUser(school.id)" class="py-1 my-n1 btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="schools.length == 0" class="alert alert-info">No schools found.</div>
    <hr />
    <h2>
      <span class="text-secondary fw-bold">Admins</span>
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">School Name</th>
          <th scope="col">School Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="admin in admins" :key="admin.id">
          <td>{{ admin.name }}</td>
          <td>{{ admin.email }}</td>
          <td class="text-end">
            <RouterLink :to="`/User/${admin.id}/edit`" class="py-1 my-n1 me-2 btn btn-primary">Edit</RouterLink>
            <button @click.stop="deleteUser(admin.id)" class="py-1 my-n1 btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="admins.length == 0" class="alert alert-info">No admins found.</div>
  </AppLayout>
</template>

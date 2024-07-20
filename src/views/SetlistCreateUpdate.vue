<script setup lang="ts">
import Backbutton from '@/components/Backbutton.vue'
import FileSelector from '@/components/FileSelector.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { useSheetBaseDirectory } from '@/plugins/sheetBaseDirectory'
import { HOME_ROUTE } from '@/router'

import { setlistCollection, withoutFields } from '@/plugins/firebase'
import { Setlist } from '@/types'
import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { ref, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { useDocument } from 'vuefire'

const route = useRoute()
const router = useRouter()
const setlistId = route.params.id as string
const formMode = setlistId ? 'edit' : 'create'

const setlistDocRef = setlistId ? doc(setlistCollection, setlistId) : null
const setlistData = setlistId ? useDocument(setlistDocRef) : null

if (setlistData)
  watch(setlistData, (data) => {
    if (!data) return
    setlist.value = data
  })

const setlist = ref<Setlist>({
  id: '',
  name: '',
  songs: [],
})

const error = ref('')
const loading = ref(false)
async function createSetlist() {
  error.value = ''
  loading.value = true
  try {
    if (formMode == 'create') await addDoc(setlistCollection, withoutFields(setlist.value, 'id'))
    else await updateDoc(setlistDocRef!, withoutFields(setlist?.value!, 'id'))

    router.push(`/setlist`)
  } catch (e) {
    console.error(e)
    error.value = 'An unknown error occurred.'
  }
  loading.value = false
}

async function deleteSetlist() {
  if (!setlistId) return

  error.value = ''
  loading.value = true
  try {
    await deleteDoc(setlistDocRef!)
    router.push(`/setlist`)
  } catch (e) {
    console.error(e)
    error.value = 'An unknown error occurred.'
  }
  loading.value = false
}

const { pdfTree } = useSheetBaseDirectory()
</script>

<template>
  <AppLayout>
    <h2 class="d-flex justify-space-between">
      <div>
        <Backbutton :to="HOME_ROUTE" />
        {{ formMode == 'create' ? 'Create' : 'Update' }} Setlist
      </div>
      <div>
        <v-btn v-if="formMode == 'edit'" @click="deleteSetlist" color="error" class="ms-2" prepend-icon="fas fa-trash">
          Delete
        </v-btn>
        <v-btn :loading="loading" color="primary" @click="createSetlist" class="ms-2">
          {{ formMode == 'create' ? 'Create' : 'Update' }}
        </v-btn>
      </div>
    </h2>
    <v-text-field v-model="setlist.name" label="Name" />
    <FileSelector v-model="setlist.songs" :files="pdfTree" />
  </AppLayout>
</template>

<style scoped lang="scss">
.disable-active-underlay {
  .v-list-item {
    --v-activated-opacity: 0;
  }
}
</style>

<style>
.DragFeedback {
  display: none;
}
</style>

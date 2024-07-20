<script setup lang="ts">
import Backbutton from '@/components/Backbutton.vue'
import FileViewer from '@/components/FileViewer.vue'
import { flatTree, mapTree } from '@/helpers'
import AppLayout from '@/layouts/AppLayout.vue'
import FullscreenLayout from '@/layouts/FullscreenLayout.vue'
import { setlistCollection } from '@/plugins/firebase'
import { useSheetBaseDirectory } from '@/plugins/sheetBaseDirectory'
import { HOME_ROUTE } from '@/router'
import { doc } from 'firebase/firestore'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDocument } from 'vuefire'

const route = useRoute()
const setlistId = route.params.id as string

const setlistData = useDocument(doc(setlistCollection, setlistId))

const { pdfTree } = useSheetBaseDirectory()

const flattendPdfTree = computed(() =>
  flatTree(mapTree(pdfTree.value, (f) => ({ ...f, handle: f.handle as FileSystemFileHandle })))
)

const selectedFiles = computed(() =>
  (setlistData.data.value?.songs || [])
    .map((name) => flattendPdfTree.value.find((f) => f.name === name)!)
    .filter((f) => f)
)
</script>

<template>
  <FullscreenLayout>
    <FileViewer :files="selectedFiles">
      <h2>
        <Backbutton :to="HOME_ROUTE" />
        Setlist
      </h2>
    </FileViewer>
  </FullscreenLayout>
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

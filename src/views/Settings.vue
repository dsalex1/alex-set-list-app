<script setup lang="ts">
import Backbutton from '@/components/Backbutton.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { useSheetBaseDirectory } from '@/plugins/sheetBaseDirectory'
import { HOME_ROUTE } from '@/router'

const { baseDirectory, chooseNewSheetBaseDirectory } = useSheetBaseDirectory()
</script>

<template>
  <AppLayout>
    <h2>
      <Backbutton :to="HOME_ROUTE" />
      Settings
    </h2>
    <div class="d-flex align-center">
      <div class="mr-2">current sheet path: {{ baseDirectory ? '/' + baseDirectory.name : 'none' }}</div>
      <v-btn @click="chooseNewSheetBaseDirectory" color="primary">Select new path</v-btn>
    </div>
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

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { setlistCollection } from '@/plugins/firebase'
import { useCollection } from 'vuefire'

const setlists = useCollection(setlistCollection)
</script>

<template>
  <AppLayout>
    <h2 class="d-flex justify-space-between">
      <div>Setlists</div>
      <div class="d-flex flex-wrap justify-end">
        <RouterLink to="/settings">
          <v-btn color="secondary" class="ms-2" prepend-icon="fas fa-cog">settings</v-btn>
        </RouterLink>
        <RouterLink to="/setlist/create">
          <v-btn color="primary" class="ms-2" prepend-icon="fas fa-plus">create</v-btn>
        </RouterLink>
      </div>
    </h2>
    <v-row class="mt-2">
      <v-col v-for="setlist in setlists" :key="setlist.id" cols="12" sm="6">
        <RouterLink :to="`/setlist/${setlist.id}`" style="text-decoration: none">
          <v-card height="100%">
            <v-card-title class="d-flex justify-space-between"
              >{{ setlist.name || 'Untitled' }}
              <RouterLink :to="`/setlist/${setlist.id}/edit`" @click.stop>
                <v-btn color="primary" variant="text" class="ms-2" prepend-icon="fas fa-edit">edit</v-btn>
              </RouterLink>
            </v-card-title>
            <VCardSubtitle>
              <v-row>
                <v-col cols="6">
                  <v-icon class="me-2">fas fa-music</v-icon>
                  {{ setlist.songs.length }} song{{ setlist.songs.length > 1 ? 's' : '' }}
                </v-col>
                <v-col cols="6">
                  <v-icon class="me-2">fas fa-clock</v-icon>
                  /
                </v-col>
              </v-row>
            </VCardSubtitle>
            <v-card-text>
              <v-chip size="small" v-for="song in setlist.songs" :key="song">{{
                song.replace(/.pdf$/, '').length > 16
                  ? song.replace(/.pdf$/, '').substring(0, 13) + '...'
                  : song.replace(/.pdf$/, '')
              }}</v-chip>
            </v-card-text>
          </v-card>
        </RouterLink>
      </v-col>
    </v-row>
  </AppLayout>
</template>

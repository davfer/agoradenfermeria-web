<script setup lang="ts">
  import {SearchResult} from "@/models/Search";
  import {computed} from "vue";

  const props = defineProps<{
    result: SearchResult
  }>()

  const keywords = computed(() => props.result.keywords.split(',').filter(r => r.trim() !== '').map(r => r.trim()))
  const authors = computed(() => props.result.authors.map(r => r.shown).filter(r => r.trim() !== '').join('; '))
</script>

<template>
  <v-sheet
    class="d-flex align-center flex-wrap  mx-auto mt-10 px-3"
    elevation="10"
    min-height="250"
    rounded
    border
  >
    <v-container class="d-flex" fluid>
      <div class="flex-0-0">
        <v-img
          :width="140"
          aspect-ratio="1/1"
          cover
          src="https://legacy.agoradenfermeria.eu/images/covers/022_5_es.jpg"
        ></v-img>
      </div>
      <div class="flex-1-1 d-flex flex-column pl-7">
        <div>
          <h1 v-html="props.result.title" class="text-md-h6"></h1>
          <p>{{props.result.magazine.label}}</p>
          <p>{{authors}}</p>

          <v-chip v-for="k in keywords" class="mx-2" size="small">
            {{ k }}
          </v-chip>
        </div>
        <div class="flex-1-1 d-flex justify-end align-end">
          <v-btn>
            Ver revista
          </v-btn>
          <v-btn color="primary ml-5" append-icon="mdi-arrow-right">
            Ver artículo
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>

</style>

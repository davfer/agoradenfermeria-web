<script setup lang="ts">
import {SearchResult} from "@/models/Search";
import {computed} from "vue";

const props = defineProps<{
  result: SearchResult,
  query: string,
}>()

const emit = defineEmits<{
  keyword: [value: string]
}>()

const keywords = computed(() => props.result.keywords.split(',').filter(r => r.trim() !== '').map(r => r.trim()))
const authors = computed(() => props.result.authors.map(r => r.shown).filter(r => r.trim() !== '').join('; '))
const image = computed(() => {
  if (!props.result.magazine?.file_path) {
    return 'https://legacy.agoradenfermeria.eu/images/web/no_magazine.jpg'
  }
  return `https://legacy.agoradenfermeria.eu/images/${props.result.magazine?.file_path}`
})
function isMatchingQuery(str: string): boolean {
  const normalizedSubStr = props.query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '');
  const normalizedStr = str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '');

  return normalizedStr.toLowerCase().indexOf(normalizedSubStr) !== -1;
}
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
          :src="image"
        ></v-img>
      </div>
      <div class="flex-1-1 d-flex flex-column pl-7">
        <div>
          <h1 v-html="props.result.title" class="text-body-1 font-weight-bold"></h1>
          <p class="text-body-1">{{ props.result.magazine.label }}</p>
          <p class="font-italic text-body-2 mb-2">{{ authors }}</p>

          <v-chip @click="emit('keyword', k)" v-for="k in keywords" class="mx-1 my-1" size="small"
                  :variant="isMatchingQuery(k) ? 'elevated' : undefined">
            {{ k }}
          </v-chip>
        </div>
        <div class="flex-1-1 d-flex justify-end align-end mt-2">
          <v-btn
            :to="{name: '/magazine/[id]', params: {id: props.result.magazine_id}, query: {page:  props.result?.page || undefined}}"
          >
            {{ $t('timeline.view') }}
          </v-btn>
          <v-btn color="primary ml-5"
                 :to="{name: '/magazine/[id]', params: {id: props.result.magazine_id}, query: {page:  props.result?.page || undefined}}"
                 append-icon="mdi-arrow-right"
          >
            {{ $t('summary.article_btn') }}
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>

</style>

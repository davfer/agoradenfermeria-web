<script lang="ts" setup>
import {computed} from "vue";
import TimelineMagazine from "@/components/TimelineMagazine.vue";
import TimelineSingapore from "@/components/TimelineSingapore.vue";
import TimelineJornadas from "@/components/TimelineJornadas.vue";

interface Item {
  type: string
  date: Date
  title: string
  news: string
  video: string
  original: string
}

const items = [
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
]

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'})
}

</script>

<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.title"
    >
      <template v-slot:opposite>
        {{ formatDate(item.date) }}
      </template>

      <v-card
        color="secondary"
        elevation="3"
      >
        <v-card-text>
          {{ item.title }}
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="item.news" :href="item.news" target="_blank">Ver Noticia</v-btn>
          <v-btn v-if="item.icn" :href="item.icn" target="_blank">Ver Notícia ICN</v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>

</style>

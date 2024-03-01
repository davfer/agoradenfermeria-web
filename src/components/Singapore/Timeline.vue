<script lang="ts" setup>
import {computed} from "vue";
import TimelineMagazine from "@/components/TimelineMagazine.vue";
import TimelineSingapore from "@/components/TimelineSingapore.vue";
import TimelineJornadas from "@/components/TimelineJornadas.vue";
import {useI18n} from "vue-i18n";

interface Item {
  type: string
  date: Date
  title: string
  news: string
  video: string
  original: string
  icon: string
  color: string
}

const items = [
  {
    date: new Date('2019-06-26'),
    title: 'Los estudiantes de enfermería se reúnen en la Academia del SGH',
    icon: 'school',
    color: '#5b13e1',
    news: 'https://www.agoradenfermeria.eu/files/singapore/1-students.pdf',
    icn: 'https://www.icn.ch/es/noticias/los-estudiantes-de-enfermeria-se-reunen-en-singapur-en-el-congreso-del-consejo'
  },
  {
    date: new Date('2019-06-27'),
    title: 'Actividades previas al Congreso',
    icon: 'timer',
    color: '#0546ba',
    news: 'https://www.agoradenfermeria.eu/files/singapore/2-presentation.pdf',
    icn: 'https://www.icn.ch/es/noticias/transformacion-de-la-oportunidad-en-accion-politica-e-inversion-para-apoyar-las-enfe'
  },
  {
    date: new Date('2019-06-27'),
    title: 'Ceremonia de Apertura del Congreso ICN 2019',
    icon: 'account-group',
    color: '#0546ba',
    news: 'https://www.agoradenfermeria.eu/files/singapore/3-opening.pdf',
    icn: 'https://www.icn.ch/es/noticias/la-presidenta-de-singapur-inaugura-el-congreso-del-consejo-internacional-de-enfermeras'
  },
  {
    date: new Date('2019-06-28'),
    title: 'Rueda de prensa Nursing Now - ICN 2019',
    icon: 'video-vintage',
    color: '#dd8208',
    video: 'https://www.youtube.com/embed/NSTHLLipPfw?si=TmCLUtNiEeF5rFSi',
  },
  {
    date: new Date('2019-06-28'),
    title: 'El CIE añade nuevo contenido y actualiza la ICNP',
    icon: 'newspaper-plus',
    color: '#dd8208',
    icn: 'https://www.icn.ch/es/noticias/el-consejo-internacional-de-enfermeras-anade-nuevo-contenido-y-actualiza-la-clasificacion'
  },
  {
    date: new Date('2019-06-28'),
    title: 'El Reto Nightingale inspira a la próxima generación de enfermeras y matronas',
    icon: 'school',
    color: '#dd8208',
    icn: 'https://www.icn.ch/es/noticias/el-reto-nightingale-inspira-la-proxima-generacion-de-enfermeras-y-matronas-lideres-durante'
  },
  {
    date: new Date('2019-06-28'),
    title: 'Necesitamos que se escuchen nuestras voces. ¡Tenemos que rugir!',
    icon: 'bullhorn',
    color: '#dd8208',
    icn: 'https://www.icn.ch/es/noticias/necesitamos-que-se-escuchen-nuestras-voces-tenemos-que-rugir'
  },
  {
    date: new Date('2019-06-28'),
    title: 'Simposio de los Socios: Ponencias',
    icon: 'handshake',
    color: '#dd8208',
    news:'https://www.agoradenfermeria.eu/files/singapore/5-simposio.pdf',
  },
  {
    date: new Date('2019-06-29'),
    title: 'Ex Primer Ministro de Corea del Sur pide "Liderazgo como el de Florence Nightingale"',
    icon: 'account-group',
    color: '#d51703',
    icn:'https://www.icn.ch/es/noticias/ex-primer-ministro-de-corea-del-sur-pide-liderazgo-como-el-de-florence-nightingale',
  },
  {
    date: new Date('2019-06-29'),
    title: 'Simposio de los Socios: Ponencias',
    icon: 'handshake',
    color: '#d51703',
    news: 'https://www.agoradenfermeria.eu/files/singapore/6-simposio.pdf'
  },
  {
    date: new Date('2019-06-30'),
    title: 'Las enfermeras apoyan a las hijas huérfanas de sus colegas en el CIE',
    icon: 'account-group',
    color: '#3a2624',
    icn: 'https://www.icn.ch/es/noticias/las-enfermeras-apoyan-las-hijas-huerfanas-de-sus-colegas-en-el-congreso-internacional-de'
  },
  {
    date: new Date('2019-06-30'),
    title: 'Una dotación de enfermeras segura es fundamental para la seguridad del paciente',
    icon: 'account-group',
    color: '#3a2624',
    icn: 'https://www.icn.ch/es/noticias/una-dotacion-de-enfermeras-segura-es-fundamental-para-la-seguridad-del-paciente'
  },
  {
    date: new Date('2019-06-30'),
    title: 'Miquel Angel del COILL presentant el seu pòster ',
    icon: 'presentation',
    color: '#3a2624',
    video: 'https://www.youtube.com/embed/sBC85o_8Y7g?si=AB2NSNH4tTR2u5_6'
  },
  {
    date: new Date('2019-06-30'),
    title: 'Dr. Tedros presente en el ICN 2019',
    icon: 'account-group',
    color: '#3a2624',
    news:'https://www.agoradenfermeria.eu/files/singapore/4-tedros.pdf',
    icn: 'https://www.icn.ch/fr/actualites/une-force-qui-peut-realiser-la-sante-pour-tous-une-force-qui-peut-realiser-la-couverture'
  },
  {
    date: new Date('2019-07-01'),
    title: 'El Consejo Internacional de Enfermeras clausura su Congreso con presentaciones clave',
    icon: 'presentation',
    color: '#16c156',
    news: 'https://www.agoradenfermeria.eu/files/singapore/8-ending.pdf'
  },
  {
    date: new Date('2019-07-01'),
    title: 'Participación de Colaboradores',
    icon: 'account-group',
    color: '#16c156',
    news: 'https://www.agoradenfermeria.eu/files/singapore/9-coill.pdf'
  },
  {
    date: new Date('2019-07-01'),
    title: 'Simposio de los Socios: Agradecimientos',
    icon: 'handshake',
    color: '#16c156',
    icn: 'https://www.agoradenfermeria.eu/files/singapore/10-closing.pdf'
  },
]

const {locale} = useI18n()

function formatDate(date: Date) {
  return date.toLocaleDateString(locale.value, {month: 'long', day: 'numeric'})
}

</script>

<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.title"
      :dot-color="item.color"
      fill-dot
      :icon="`mdi-${item.icon}`"
    >
      <template v-slot:opposite>
        {{ formatDate(item.date) }}
      </template>

      <v-card color="secondary" elevation="3">
        <v-card-text class="pb-0">
          <h3>{{ item.title }}</h3>
        </v-card-text>
        <v-card-actions class="pa-4 pt-3">
          <v-btn color="primary" variant="elevated" v-if="item.news" :href="item.news" target="_blank"
                 prepend-icon="mdi-newspaper">
            {{ $t("buttons.news_btn") }}
          </v-btn>
          <v-btn variant="outlined" v-if="item.icn" :href="item.icn" target="_blank" prepend-icon="mdi-web">
            {{ $t("buttons.icn_btn") }}
          </v-btn>
          <iframe v-if="item.video" width="560" height="315" :src="item.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>

</style>

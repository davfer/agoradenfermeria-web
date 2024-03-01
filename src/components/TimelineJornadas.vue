<script lang="ts" setup>

import Timeline from "@/components/Singapore/Timeline.vue";
</script>

<template>
  <v-timeline-item icon="mdi-school" dot-color="secondary" fill-dot>
    <v-card
      color="primary"
      elevation="3"
      min-height="140px"
      class="mx-auto align-center justify-center flex-wrap text-center"
    >
      <v-img class="Card__image" :src="$i18n.locale === 'ca' ? 'https://www.agoradenfermeria.eu/images/news/57a4b69552ba0.png' : 'https://www.agoradenfermeria.eu/images/news/579e96b9979ec.png'"/>
      <v-card-text>
            <v-btn
              class="ms-2"
              prepend-icon="mdi-web"
              color="secondary"
              :href="`https://20.agoradenfermeria.net/?lang=${$i18n.locale}`"
            >
              Ver portal jornada
            </v-btn>
            <v-btn
              class="ms-2"
              prepend-icon="mdi-file-pdf-box"
              color="white"
              variant="elevated"
              :href="`https://20.agoradenfermeria.net/files/poster_${$i18n.locale}.pdf`"
            >
              Poster
            </v-btn>

      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<style scoped>

</style>

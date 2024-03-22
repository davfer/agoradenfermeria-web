<script lang="ts" setup>

const dialog = ref(false)
</script>

<template>
  <v-timeline-item icon="mdi-school" dot-color="secondary" fill-dot>
    <v-card
      color="primary"
      elevation="3"
      min-height="140px"
      class="mx-auto align-center justify-center flex-wrap text-center"
    >
      <v-img class="Card__image"
             :src="$i18n.locale === 'ca' ? 'https://legacy.agoradenfermeria.eu/images/news/57a4b69552ba0.png' : 'https://legacy.agoradenfermeria.eu/images/news/579e96b9979ec.png'"/>
      <v-card-text>
        <v-dialog
          v-model="dialog"
          width="900"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="ms-2"
              prepend-icon="mdi-video"
              color="secondary"
              v-bind="props"
            >
              {{ $t('buttons.video_jornada_btn')}}
            </v-btn>
          </template>
          <v-sheet>
            <video controls src="https://legacy.agoradenfermeria.eu/files/jornada/video/resum_jornada.mp4"
                   width="100%"></video>
          </v-sheet>
        </v-dialog>
        <v-btn
          class="ms-2"
          prepend-icon="mdi-web"
          color="secondary"
          :href="`https://20.agoradenfermeria.net/?lang=${$i18n.locale}`"
          target="_blank"
        >
          {{ $t('buttons.jornada_btn') }}
        </v-btn>
        <v-btn
          class="ms-2"
          prepend-icon="mdi-file-pdf-box"
          color="white"
          variant="elevated"
          :href="`https://20.agoradenfermeria.net/files/poster_${$i18n.locale}.pdf`"
          target="_blank"
        >
          {{ $t('buttons.poster_btn') }}
        </v-btn>

      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<style scoped>

</style>

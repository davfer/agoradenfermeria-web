<template>
  <v-app-bar color="primary" density="prominent">
    <template v-slot:prepend>
      <v-img v-if="mobile" :src="logoUrl" :width="70"/>
      <v-img v-else :src="logoUrl" :width="200"/>
    </template>

    <v-container class="ma-2">
      <v-row>
        <v-text-field
          density="comfortable"
          prepend-inner-icon="mdi-magnify"
          rounded
          variant="solo"
        >
          <template v-slot:append-inner>
            <v-btn>{{ $t('header.search') }}</v-btn>
          </template>
        </v-text-field>
      </v-row>

      <v-row>
        <v-tabs :model-value="tabPage" color="black" grow height="46">
          <v-tab to="/" value="/">{{ $t('header.revista') }}</v-tab>
          <v-tab v-if="false" to="/resources" value="/resources">{{ $t('header.recursos') }}</v-tab>
          <v-tab to="/contact" value="/contact">{{ $t('header.contacto') }}</v-tab>
          <v-select v-model="locale" :items="items" class="flex-0-0"/>
        </v-tabs>

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import logoCa from "/src/assets/logo_ca.png"
import logoEs from "/src/assets/logo_es.png"

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {computed} from "vue";
import {useDisplay} from "vuetify";

const {locale} = useI18n()
const {mobile} = useDisplay()

const router = useRouter()

const logoUrl = computed(() => locale.value === "ca" ? logoCa : logoEs)
const tabPage = computed(() => router.currentRoute.value.path)
const items = [
  {title: 'Idioma: Català', value: 'ca'},
  {title: 'Idioma: Castellano', value: 'es'},
]
</script>

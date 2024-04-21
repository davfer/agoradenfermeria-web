<template>
  <v-app-bar color="primary" density="prominent">
    <template v-slot:prepend>
      <v-img v-if="mobile" :src="logoUrl" :width="70"/>
      <v-img v-else :src="logoUrl" :width="200"/>
    </template>

    <v-container class="ma-2">
      <v-row>
        <v-form ref="formVal" action="/search" method="get" class="w-100">
          <v-text-field
            density="comfortable"
            prepend-inner-icon="mdi-magnify"
            rounded
            variant="solo"
            required="true"
            name="q"
            v-model="searchQuery"
          >
            <template v-slot:append-inner>
              <v-btn type="submit" @click="formVal.submit()">{{ $t('header.search') }}</v-btn>
            </template>
          </v-text-field>
        </v-form>
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
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import {useDisplay} from "vuetify";

const {locale} = useI18n()
const {mobile} = useDisplay()

const route = useRoute()
const searchQuery = computed<string>(() => route.query.q as string) // 59

const logoUrl = computed(() => locale.value === "ca" ? logoCa : logoEs)
const tabPage = computed(() => route.path)
const items = [
  {title: 'Idioma: Català', value: 'ca'},
  {title: 'Idioma: Castellano', value: 'es'},
]

const formVal = ref()
</script>

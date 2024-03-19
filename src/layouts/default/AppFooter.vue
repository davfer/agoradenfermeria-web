<template>
  <v-footer app padless color="primary" density="prominent">
    <div class="px-4 py-2 text-center w-100">
      <v-btn variant="text">Mª Jose Vives Fortuny</v-btn>
      -
      <v-btn href="tel:+34607922260" variant="text">+34 607 92 22 60</v-btn>
      -
      <v-btn href="mailto:info@agoradenfermeria.com" variant="text">info@agoradenfermeria.com</v-btn>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

const {t, locale} = useI18n()

const router = useRouter()

</script>

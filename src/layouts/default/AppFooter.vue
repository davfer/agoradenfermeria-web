<template>
  <v-footer app padless color="primary" density="prominent">
    <div class="px-4 py-2 text-center w-100">
     <strong>+34 615 46 49 71 - nataliasuarezbenitez@gmai.com - Natalia Suarez Bentiez</strong>
    </div> 
  </v-footer>
</template>

<script lang="ts" setup>

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {computed} from "vue";

const {t, locale} = useI18n()

const router = useRouter()

</script>

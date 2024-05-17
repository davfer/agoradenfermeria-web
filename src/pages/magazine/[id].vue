<template>
  <v-container v-if="magazine" class="pa-0" fluid style="    height: 100%;position:relative;">
    <Pdf v-if="magazine.magazine_format === 'pdf'" :magazine="magazine" :page="$route.query['page'] || 1"/>
    <Html v-else :magazine="magazine" :page="$route.query['page'] || undefined"/>
  </v-container>
</template>
<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useMagazineStore} from "@/store/magazine";
import Pdf from "@/components/Pdf.vue";
import Html from "@/components/Html.vue";

const router = useRouter()
const magazineStore = useMagazineStore()

const magazine = ref<Magazine>()

onMounted(async () => {
  const mid = parseInt(router.currentRoute.value.params['id'] as string)
  magazine.value = await magazineStore.getMagazine(mid)
})

</script>

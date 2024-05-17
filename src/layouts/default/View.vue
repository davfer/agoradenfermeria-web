<template>
  <v-main>
    <magazine-menu v-if="showingMagazine" :magazine="showingMagazine" :page="$route.query['page'] || undefined" />
    <router-view/>
  </v-main>
</template>

<script lang="ts" setup>

import MagazineMenu from "@/layouts/default/MagazineMenu.vue";
import {ref} from "vue";

const showingMagazine = ref<Magazine>()

// TODO

</script>

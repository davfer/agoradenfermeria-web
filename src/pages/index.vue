<template>
  <v-container fluid>
    <v-row class="">
      <v-sheet :height="100" border
               class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" color="secondary" rounded>
        {{ $t('description') }}
      </v-sheet>
    </v-row>
    <v-row>
      <v-col lg="7" sm="12" class="ms-md-auto">
        <Timeline :magazines="magazineStore.magazines"/>
      </v-col>
      <v-col lg="2" sm="12" class="ms-md-auto">

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import Timeline from "@/components/Timeline.vue";
import {useMagazineStore} from "@/store/magazine";
import {onMounted} from "vue";

const magazineStore = useMagazineStore();
onMounted(async () => {
  await magazineStore.loadMagazines();
});
</script>

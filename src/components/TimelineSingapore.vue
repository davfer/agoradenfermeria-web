<script lang="ts" setup>
import {ref} from "vue";
import Timeline from "@/components/Singapore/Timeline.vue";

const dialog = ref(false)

</script>

<template>
  <v-timeline-item>
    <template v-slot:icon>
      <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
    </template>

    <v-card
      color="white"
      elevation="3"
      min-height="140px"
      class="mx-auto align-center justify-center flex-wrap text-center"
    >
      <v-img class="Card__image" src="https://www.agoradenfermeria.eu/images/news/5bf5dff0abd6c.png"/>
      <v-card-title class="pt-0">
        Ágora informa desde el ICN 2019
      </v-card-title>
      <v-card-text>
        <v-dialog
          v-model="dialog"
          width="800"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="ms-2"
              prepend-icon="mdi-newspaper"
              color="secondary"
              v-bind="props"
            >
              Ver reportaje
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <h2 class="headline">Ágora informa desde el ICN 2019</h2>
            </v-card-title>
            <v-card-text>
              <p>Ágora de Enfermería se desplaza a Singapur para cubrir el congreso del Consejo Internacional de
                Enfermería 2019. Intentaremos emitir en directo los eventos de más interés y siguiendo las
                presentaciones a nuestras entidades colaboradoras.</p>
              <h2 class="mt-5 text-center">
                Día a día
              </h2>
              <Timeline/>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<style lang="sass" scoped>


</style>

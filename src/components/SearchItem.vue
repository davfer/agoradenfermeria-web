<script setup lang="ts">

</script>

<template>
  <v-sheet
    class="d-flex align-center flex-wrap  mx-auto mt-10 px-3"
    elevation="10"
    height="250"
    rounded
    border
  >
    <v-container class="d-flex" fluid>
      <div class="flex-0-0">
        <v-img
          :width="140"
          aspect-ratio="1/1"
          cover
          src="https://legacy.agoradenfermeria.eu/images/covers/022_5_es.jpg"
        ></v-img>
      </div>
      <div class="flex-1-1 d-flex flex-column pl-7">
        <div>
          <h1>Titulo</h1>
          <p>Año de lanzamiento + volumen</p>
          <p>autors</p>

          <v-chip class="mx-2" size="small">
            key-words
          </v-chip>
          <v-chip class="mx-2" variant="outlined" size="small">
            key-words-not-in-search
          </v-chip>
        </div>
        <div class="flex-1-1 d-flex justify-end align-end">
          <v-btn>
            Ver revista
          </v-btn>
          <v-btn color="primary ml-5" append-icon="mdi-arrow-right">
            Ver artículo
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>

</style>

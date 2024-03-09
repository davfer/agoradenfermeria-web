<script lang="ts" setup>

const props = defineProps<{ collaborators: Collaborator[] }>()


</script>

<template>
  <v-card class="Collaborators">
    <v-card-title class="bg-primary">{{ $t('collaborators') }}</v-card-title>
    <v-card-text>
      <v-list class="ma-0 pa-0 ">
        <v-list-item class="mt-4 Collaborators__item" v-for="collaborator in props.collaborators" :key="collaborator.id">
          <v-img
            :src="`https://agoradenfermeria.eu/images/${collaborator.logo?.file_path}`"
            class="ma-2"
            :aspect-ratio="16/9"/>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>
  .Collaborators
    .Collaborators__item
      border: 1px solid #98C838
      max-width: 240px
</style>

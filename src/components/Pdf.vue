<script lang="ts" setup>

const props = defineProps<{ magazine: Magazine, page: number | undefined }>()

if (props.magazine.magazine_format !== 'pdf') {
  throw new Error('PDF Magazine format not supported.')
}

const pdfPath = 'https://legacy.agoradenfermeria.eu/' + props.magazine.magazine_entrypoint + (props.page ? `#page=${props.page}` : '')
</script>

<template>
  <embed :src="pdfPath" style="width: 100vw; height: 100%"/>
</template>

<style scoped>

</style>

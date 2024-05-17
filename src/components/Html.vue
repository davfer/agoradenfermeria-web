<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const props = defineProps<{ magazine: Magazine, page: string | undefined }>()

if (props.magazine.magazine_format !== 'html') {
  throw new Error('HTML Magazine format not supported.')
}

const {locale} = useI18n()
const lang = locale.value === "es" ? "CAST" : "CAT";

const src = ref<string>(`https://legacy.agoradenfermeria.eu/${props.magazine.magazine_entrypoint}`)
if (props.page) {
  src.value = `https://legacy.agoradenfermeria.eu/${lang}/${props.magazine.magazine_dir}/${props.page}`
}

</script>

<template>
    <iframe width="100%" height="100%" :src="src"></iframe>
</template>

<style scoped>

</style>

<template>
  <router-view/>
</template>

<script lang="ts" setup>

import {useHead, useSeoMeta} from "@unhead/vue";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router"; useRouter()
const router = useRouter()
const {t, locale} = useI18n()

router.beforeEach((to, from, next) => {
  if (to.query.lang) {
    localStorage.setItem('locale', to.query.lang as string)
  }

  if (localStorage.getItem('locale')) {
    locale.value = localStorage.getItem('locale') as string
  }

  next()
})

useHead({
  title() {
    return t("title")
  },
  link() {
    return [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=EB+Garamond",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ];
  },
})
useSeoMeta({
  title: t("title"),
  description: t("description"),
  ogTitle: t("title"),
  ogDescription: t("description"),
  ogImage: `/logo_${locale.value}.png`,
})

</script>

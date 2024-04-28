<template>
  <v-container>
    <div>
      <search-item @keyword="(k) => query = k" v-for="r in result?.result" :key="r.id" :result="r" :query="route.query.q" />
    </div>

    <div class="text-center">
      <v-pagination v-model="page" :length="Math.ceil(result?.total / 10)"></v-pagination>
    </div>
  </v-container>

</template>
<script lang="ts" setup>

import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useFetcher} from "@/lib/fetcher";
import {SearchResults} from "@/models/Search";
import SearchItem from "@/components/SearchItem.vue";

const result = ref<SearchResults>()
const loading = ref(false)

const fetcher = useFetcher()
const route = useRoute()
const router = useRouter()
const page = ref<number>()
const query = ref<string>()
onMounted(() => {
  console.log("Search page: ", route.query)
  query.value = route.query.q as string
  fetchSearch(query.value, route.query.p)
})

watch(page, p => {
  fetchSearch(query.value, p)
})

watch(query, q => {
  router.push({path: '/search', query: {q}})
  page.value = 1
  fetchSearch(q as string, page.value)
})

const fetchSearch = async (query: string, page: number) => {
  loading.value = true
  const params = new URLSearchParams()
  params.append('q', query)
  if (page) {
    params.append('p', page.toString())
  }

  const res = await fetcher.get(`search?${params.toString()}`)
  result.value = res.data as SearchResults
  loading.value = false
  console.log("Search results: ", result.value)
}
</script>

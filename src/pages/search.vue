<template>
  <search-item />

  <div class="text-center">
    <v-pagination :length="5"></v-pagination>
  </div>

</template>
<script lang="ts" setup>

import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useFetcher} from "@/lib/fetcher";
import {SearchResult, SearchResults} from "@/models/Search";
import SearchItem from "@/components/SearchItem.vue";

const result = ref<SearchResults>()
const loading = ref(false)

const fetcher = useFetcher()
const route = useRoute()
onMounted(() => {
  console.log("Search page: ", route.query)

  fetchSearch(route.query.q, route.query.p)
})

const fetchSearch = async (query: string, page: number) => {
  loading.value = true
  const params = new URLSearchParams()
  params.append('q', query)
  if (page) {
    params.append('p', page.toString())
  }

  const res = await fetcher.get(`search?${params.toString()}`)
  result.value = res.data
  loading.value = false
  console.log("Search results: ", result.value)
}
</script>

<template>
  <v-container>
    <div class="d-flex justify-space-between pa-4 align-center">
      <div>{{ $t('search.results', result?.total) }}</div>
      <div>
        {{ $t('search.search_by') }}
        <v-btn-toggle
          v-model="filter"
          group
          density="compact"
          color="secondary"
        >
          <v-btn size="small" value="">
            {{ $t('search.all') }}
          </v-btn>

          <v-btn size="small" value="keywords">
            {{ $t('search.keywords') }}
          </v-btn>

          <v-btn size="small" value="articles">
            {{ $t('search.article') }}
          </v-btn>

          <v-btn size="small" value="authors">
            {{ $t('search.author') }}
          </v-btn>


        </v-btn-toggle>
      </div>
      <div>
        {{ $t('search.order_by') }}
        <v-btn-toggle
          v-model="order"
          color="secondary"
          group
          density="compact"
        >
          <v-btn size="small" value="">
            {{ $t('search.relevance') }}
          </v-btn>

          <v-btn size="small" value="recent">
            {{ $t('search.recent') }}
          </v-btn>

          <v-btn size="small" value="title">
            {{ $t('search.title') }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <v-divider/>

    <div>
      <search-item @keyword="(k) => query = k" v-for="r in result?.result" :key="r.id" :result="r"
                   :query="route.query.q"/>
    </div>

    <div class="text-center my-10">
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
import {fi} from "vuetify/locale";

const result = ref<SearchResults>()
const loading = ref(false)

const fetcher = useFetcher()
const route = useRoute()
const router = useRouter()
const page = ref<number>()
const query = ref<string>()
const order = ref<string>('')
const filter = ref<string>('')
onMounted(() => {
  console.log("Search page: ", route.query)
  query.value = route.query.q as string
  fetchSearch(query.value, route.query.p, filter.value, order.value)
})

watch(page, p => {
  fetchSearch(query.value, p, filter.value, order.value)
})

watch(filter, p => {
  fetchSearch(query.value, p, filter.value, order.value)
})

watch(order, p => {
  fetchSearch(query.value, p, filter.value, order.value)
})

watch(query, q => {
  router.push({path: '/search', query: {q}})
  page.value = 1
  filter.value = ''
  order.value = ''
  fetchSearch(q as string, page.value, filter.value, order.value)
})

const fetchSearch = async (query: string, page: number, filter: string, order: string) => {
  loading.value = true
  const params = new URLSearchParams()
  params.append('q', query)
  if (page) {
    params.append('p', page.toString())
  }
  if (filter) {
    params.append('filter', filter)
  }
  if (order) {
    params.append('order', order)
  }

  const res = await fetcher.get(`search?${params.toString()}`)
  result.value = res.data as SearchResults
  loading.value = false
  console.log("Search results: ", result.value)
}
</script>

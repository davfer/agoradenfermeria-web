<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps<{ summaries: Summary[] }>()

const sections = computed(() => {
  const sections = [] as Summary[][]

  for (let i = 0; i < props.summaries.length; i++) {
    const summary = props.summaries[i]
    const section = summary.section
    if (!section) {
      sections.push([summary])
      continue
    }

    const lastSection = sections[sections.length - 1]
    if (lastSection && lastSection[0].section?.name === section.name) {
      sections[sections.length - 1].push(summary)
    } else {
      sections.push([summary])
    }
  }

  return sections
})

const authors = computed(() => (summary: Summary) => {
  if (!summary.authors) return ''
  return summary.authors.map(author => author?.shown || '').join('; ')
})
</script>

<template>
  <v-card
    v-for="(section, i) in sections"
    :key="i"
    class="mb-4 Summary">
    <v-card-title class="bg-primary">
      <h3 class="text-h5 Summary__title">{{ section[0].section?.title }}</h3>
    </v-card-title>

    <v-card-text class="pa-0">
      <v-list>
        <v-list-item
          v-for="(summary, j) in section"
          :key="i"
          class="SummarySection"
          two-line>
          <v-list-item-title class="text-wrap SummarySection__title" v-html="summary.label?.title"></v-list-item-title>
          <v-list-item-subtitle class="SummarySection__subtitle pt-2 px-2 font-italic" v-html="authors(summary)"></v-list-item-subtitle>
          <v-list-item-action class="pb-2 pt-4 d-flex">
            <div class="flex-grow-1">
              <v-btn
                v-if="summary.abstract"
                color="primary"
                prepend-icon="mdi-file-document"
                size="small"
                variant="outlined">
                {{ $t('summary.abstract_btn') }}
              </v-btn>
            </div>
            <div class="flex-grow-0">
              <v-btn
                append-icon="mdi-arrow-right"
                color="primary"
                size="small"
                variant="elevated"
                :to="{name: '/magazine/[id]', params: {id: summary.magazine_id.toString()}, query: {page: summary.label?.page || undefined}}"
              >
                {{ $t('summary.article_btn') }}
              </v-btn>
            </div>
          </v-list-item-action>

          <v-divider v-if="j + 1 < section.length" class="my-2"/>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>
.Summary
  &__title
    font-size: 1em !important
    font-weight: bold

.SummarySection
  &__title
    color: #000080
    font-size: 1.5em !important

  &__subtitle
    font-size: 1rem
    color: #666
</style>

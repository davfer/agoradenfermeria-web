<script lang="ts" setup>
import {computed, ref} from "vue";
import Summary from "@/components/Summary.vue";
import {useSummaryStore} from "@/store/summary";

const props = defineProps<{ magazine: Magazine }>()

const summaryStore = useSummaryStore()

const dialog = ref(false)
const loadingSummary = ref(false)
const summaries = ref<Summary[]>([])
const loadSummary = async () => {
  loadingSummary.value = true
  summaries.value = await summaryStore.loadSummary(props.magazine.number.toString())
  dialog.value = true
  loadingSummary.value = false
}

const dotIcon = computed((): { icon: string, color: string } => {
  if (props.magazine.vol_major === 24) {
    return {
      icon: 'mdi-star',
      color: 'green'
    }
  }
  switch (props.magazine.vol_minor) {
    case 1:
      return {
        icon: 'mdi-flower',
        color: 'pink'
      }
    case 2:
      return {
        icon: 'mdi-white-balance-sunny',
        color: 'yellow'
      }
    case 3:
      return {
        icon: 'mdi-leaf-maple',
        color: 'brown'
      }
    case 4:
      return {
        icon: 'mdi-snowflake',
        color: 'blue'
      }
    default:
      return {
        icon: 'mdi-book-variant',
        color: 'primary'
      }
  }
})

const image = computed(() => {
  if (!props.magazine.cover?.file_path) {
    return 'https://www.agoradenfermeria.eu/images/web/no_magazine.jpg'
  }
  return `https://www.agoradenfermeria.eu/images/${props.magazine.cover.file_path}`
})
</script>

<template>
  <v-timeline-item
    :dot-color="dotIcon.color"
    :icon="dotIcon.icon"
    fill-dot
  >
    <v-card
      color="secondary"
      elevation="3"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-img :src="image" :width="100" class="flex-grow-0"></v-img>
        <div class="flex-grow-1 d-flex flex-column">
          <v-card-title class="text-h5">
            {{ props.magazine.details?.label }}
          </v-card-title>

          <v-card-subtitle class="flex-grow-1">
            {{ $t("timeline.number", {num: props.magazine.number}) }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              class="ms-2"
              prepend-icon="mdi-eye"
              size="small"
              variant="tonal"
              :to="{name: '/magazine/[id]', params: {id: props.magazine.id.toString()}}"
            >
              {{ $t('timeline.view') }}
            </v-btn>

            <v-dialog
              v-model="dialog"
              width="800"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  class="ms-2"
                  prepend-icon="mdi-file-document"
                  size="small"
                  variant="outlined"
                  @click="loadSummary()"
                >
                  {{ $t('timeline.summary') }}
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="d-flex justify-end align-center">
                  <v-btn
                    icon="mdi-close"
                    variant="text"
                    @click="dialog = false"
                  ></v-btn>
                </v-card-title>
                <v-card-text>
                  <v-card
                    color="secondary"
                    elevation="3"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <v-img :src="image" :width="100" class="flex-grow-0"></v-img>
                      <div class="flex-grow-1 d-flex flex-column">
                        <v-card-title class="text-h5">
                          {{ props.magazine.details?.label }}
                        </v-card-title>

                        <v-card-subtitle class="flex-grow-1">
                          {{ $t("timeline.number", {num: props.magazine.number}) }}
                        </v-card-subtitle>
                        <v-card-actions class="justify-end d-flex">
                          <v-btn
                            class="ms-2"
                            prepend-icon="mdi-eye"
                            size="small"
                            variant="tonal"
                            :to="{name: '/magazine/[id]', params: {id: props.magazine.number.toString()}}"
                          >
                            {{ $t('timeline.view') }}
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </div>
                  </v-card>

                  <v-divider class="my-4" />

                  <Summary :summaries="summaries"/>
                </v-card-text>
                <v-card-actions >
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    {{ $t('timeline.close') }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-timeline-item>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import {computed} from "vue";
import TimelineMagazine from "@/components/TimelineMagazine.vue";
import TimelineSingapore from "@/components/TimelineSingapore.vue";
import TimelineJornadas from "@/components/TimelineJornadas.vue";
import {useDisplay} from "vuetify";

const props = defineProps<{ magazines: Magazine[] }>()

const {mobile} = useDisplay()

interface Item {
  type: string
  magazine: Magazine
}

const items = computed((): Item[] => {
  let its = []

  for (let i = 0; i < props.magazines.length; i++) {
    if (i === 4) {
      its.push({
        type: 'singapore',
      })
    } else if (i === 14) {
      its.push({
        type: 'jornadas',
      })
    }
    its.push({
      type: 'magazine',
      magazine: props.magazines[i]
    })
  }

  return its
})

const getComponent = (item: Item) => {
  switch (item.type) {
    case 'magazine':
      return {
        comp: TimelineMagazine,
        props: {
          magazine: item.magazine
        }
      }
    case 'singapore':
      return {
        comp: TimelineSingapore,
        props: {}
      }
    case 'jornadas':
      return {
        comp: TimelineJornadas,
        props: {}
      }
    default:
      return null
  }
}

</script>

<template>
  <v-timeline :side="mobile ? 'end' : undefined">
    <component :is="getComponent(item)?.comp" v-for="(item, i) in items" :key="i" v-bind="getComponent(item)?.props"/>
  </v-timeline>
</template>

<style scoped>

</style>

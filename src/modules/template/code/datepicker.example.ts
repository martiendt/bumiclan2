export default function codeSample() {
  return `<script setup lang="ts">
import { ref } from 'vue'
import Datepicker from '@/components/datepicker.vue'

const date = ref()
</script>

<template>
  <component :is="Datepicker" v-model="date" />
</template>
`
}

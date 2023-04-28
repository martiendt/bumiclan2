<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import Datepicker from '@/components/datepicker.vue'
import Switch from '@/components/switch.vue'
import codeSample from '../../code/datepicker.example'

const date = ref()
const datepickerScriptCode = codeSample()
const datepickerToggle = ref(false)
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Datepicker</h2>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'template' }, { name: 'component' }, { name: 'datepicker' }]"
      />
    </div>
    <div class="card border rounded p-4 shadow space-y-5">
      <div class="flex justify-between">
        <h3>Datepicker</h3>
        <component :is="Switch" v-model="datepickerToggle" label="code" />
      </div>
      <p>
        The Datepicker is used to allow the user to select a date, and to display that date in
        specified format.
      </p>
      <div>
        <component :is="Datepicker" v-model="date" />
      </div>
      <div
        class="card transform-gpu border border-gray-800 rounded bg-slate-800 px-2 text-white transition-all dark:bg-gray-900"
        :class="{
          'max-h-[1000px] overflow-auto py-2': datepickerToggle,
          'max-h-0 overflow-hidden': !datepickerToggle
        }"
      >
        <p class="p-1 text-sm">.vue</p>
        <highlightjs autodetect :code="datepickerScriptCode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import Switch from '@/components/switch.vue'

const checked = ref(false)
const markdown = '#markdown'

const isShowBasicSwitchSourceCode = ref(false)
const basicSwitchHtmlCode = `<component :is="Switch" v-model="checked" label="Check" />`
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header justify flex items-center">
      <h1 class="">Form Switch</h1>
      <div class="h-8 border-l border-slate-300"></div>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'template' }, { name: 'form' }, { name: 'switch' }]"
      />
    </div>
    <div class="space-y-8">
      <div class="card p-4">
        <div class="space-y-5">
          <div class="flex justify-between">
            <h2>Basic Switch</h2>
            <component :is="Switch" v-model="isShowBasicSwitchSourceCode" label="code" />
          </div>
          <p>
            Code The Switch component is used as an alternative for the checkbox. The option that
            the switch controls, as well as the state it's in, should be made clear from the
            corresponding inline label.
          </p>
          <div class="flex flex-wrap gap-5">
            <component :is="Switch" v-model="checked" label="Check" />
          </div>
        </div>
        <div
          class="transform-gpu bg-slate-800 px-2 text-white transition-all dark:bg-slate-700"
          :class="{
            'max-h-[1000px] overflow-auto py-2 mt-5': isShowBasicSwitchSourceCode,
            'max-h-0 overflow-hidden': !isShowBasicSwitchSourceCode
          }"
        >
          <div class="p-1 text-sm text-slate-400">vue</div>
          <highlightjs autodetect :code="basicSwitchHtmlCode" />
        </div>
      </div>
      <div class="card p-4 space-y-5">
        <div class="flex justify-between">
          <h3>Disabled Size</h3>
          <component :is="Switch" v-model="isShowBasicSwitchSourceCode" label="code" />
        </div>
        <p class="flex">
          Code The Switch component is used as an alternative for the checkbox. The option that the
          switch controls, as well as the state it's in, should be made clear from the corresponding
          inline label.
        </p>
        <div class="flex flex-wrap gap-5">
          <component :is="Switch" :value="false" :disabled="true" />
          <component :is="Switch" :value="true" :disabled="true" />
        </div>
        <div class="flex flex-wrap gap-5"></div>
        <div
          class="transform-gpu bg-slate-800 px-2 text-white transition-all dark:bg-slate-700"
          :class="{
            'max-h-[1000px] overflow-auto py-2': isShowBasicSwitchSourceCode,
            'max-h-0 overflow-hidden': !isShowBasicSwitchSourceCode
          }"
        >
          <div class="p-1 text-sm">html</div>
          <highlightjs autodetect :code="basicSwitchHtmlCode" />
        </div>
      </div>
      <div class="card p-4 space-y-5">
        <div class="flex justify-between">
          <h3>Switch Size</h3>
          <component :is="Switch" v-model="isShowBasicSwitchSourceCode" label="code" />
        </div>
        <p class="flex">
          Code The Switch component is used as an alternative for the checkbox. The option that the
          switch controls, as well as the state it's in, should be made clear from the corresponding
          inline label.
        </p>
        <div class="flex flex-wrap gap-5">
          <component :is="Switch" v-model="checked" label="Check" />
          <component :is="Switch" v-model="checked" label="Disabled" :disabled="true" />
        </div>
        <div class="flex flex-wrap gap-5">
          <component :is="Switch" v-model="checked" label="Small" size="sm" />
          <component :is="Switch" v-model="checked" label="Base" size="base" />
          <component :is="Switch" v-model="checked" label="Large" size="lg" />
          <component :is="Switch" v-model="checked" label="Extra Large" size="xl" />
        </div>
        <div class="flex flex-wrap gap-5"></div>
        <div
          class="transform-gpu bg-slate-800 px-2 text-white transition-all dark:bg-slate-700"
          :class="{
            'max-h-[1000px] overflow-auto py-2': isShowBasicSwitchSourceCode,
            'max-h-0 overflow-hidden': !isShowBasicSwitchSourceCode
          }"
        >
          <div class="p-1 text-sm">html</div>
          <highlightjs autodetect :code="basicSwitchHtmlCode" />
        </div>
      </div>
      <div class="card p-4 space-y-5">
        <h3>API</h3>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr class="basic-table-row">
                <th class="basic-table-head">Name</th>
                <th class="basic-table-head">Type</th>
                <th class="basic-table-head">Default</th>
                <th class="basic-table-head">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="basic-table-row">
                <td class="basic-table-body">1</td>
                <td class="basic-table-body">Cy Ganderton</td>
                <td class="basic-table-body">Quality Control Specialist</td>
                <td class="basic-table-body">Blue</td>
              </tr>
              <tr class="basic-table-row">
                <td class="basic-table-body">2</td>
                <td class="basic-table-body">Hart Hagerty</td>
                <td class="basic-table-body">Desktop Support Technician</td>
                <td class="basic-table-body">Purple</td>
              </tr>
              <tr class="basic-table-row">
                <td class="basic-table-body">3</td>
                <td class="basic-table-body">Brice Swyre</td>
                <td class="basic-table-body">Tax Accountant</td>
                <td class="basic-table-body">Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

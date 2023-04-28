<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-block'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Block</h2>
      <component :is="Switch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>Buttons have block level layout.</p>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <button class="btn btn-primary btn-block">Primary</button>
      <button class="btn btn-secondary btn-block">Secondary</button>
      <button class="btn btn-info btn-block">Info</button>
      <button class="btn btn-success btn-block">Success</button>
      <button class="btn btn-warning btn-block">Warning</button>
      <button class="btn btn-danger btn-block">Danger</button>
    </div>
    <div
      class="card-code"
      :class="{
        'card-code-active': codeToggle,
        'card-code-inactive': !codeToggle
      }"
    >
      <div class="card-code-label">vue</div>
      <highlightjs autodetect :code="codeExample" />
    </div>
  </div>
</template>

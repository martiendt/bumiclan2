<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-icon'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Icon</h2>
      <component :is="Switch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>You can also use SVG shapes for spinners.</p>
    </div>
    <div class="flex gap-4">
      <i class="i-fas-spinner block animate-spin h-8 w-8"></i>
      <i class="i-fas-spinner-third block animate-spin h-8 w-8"></i>
      <i class="i-fas-arrows-spin block animate-spin h-8 w-8"></i>
      <i class="i-fas-gear block animate-spin h-8 w-8"></i>
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

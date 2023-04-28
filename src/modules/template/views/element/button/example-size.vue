<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-size'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Size</h2>
      <component :is="Switch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>Hover the Avatar to activate slide animation.</p>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <button class="btn btn-xs btn-primary">XS</button>
      <button class="btn btn-sm btn-secondary">SM</button>
      <button class="btn btn-md btn-info">MD</button>
      <button class="btn btn-lg btn-success">LG</button>
      <button class="btn btn-xl btn-warning">XL</button>
      <button class="btn btn-2xl btn-danger">2XL</button>
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

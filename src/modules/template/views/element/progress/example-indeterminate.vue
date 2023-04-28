<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-indeterminate'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Indeterminate</h2>
      <component :is="Switch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>
        You can use indeterminate mode for the progress bar when you do not know how long an
        operation will take.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <div class="progress-xs progress-container">
        <div class="progress-primary is-indeterminate"></div>
      </div>
      <div class="progress-xs progress-container">
        <div class="progress-secondary is-indeterminate"></div>
      </div>
      <div class="progress-xs progress-container">
        <div class="progress-info is-indeterminate"></div>
      </div>
      <div class="progress-xs progress-container">
        <div class="progress-success is-indeterminate"></div>
      </div>
      <div class="progress-xs progress-container">
        <div class="progress-warning is-indeterminate"></div>
      </div>
      <div class="progress-xs progress-container">
        <div class="progress-danger is-indeterminate"></div>
      </div>
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

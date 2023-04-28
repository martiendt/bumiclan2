<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-heart'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Heart</h2>
      <component :is="Switch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>
        Mask crops the content of the element to common shapes. The mask can crop the shape of
        heart.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <img class="mask mask-heart" src="https://via.placeholder.com/150" />
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

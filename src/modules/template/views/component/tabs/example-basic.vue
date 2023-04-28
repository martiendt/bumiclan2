<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-basic'
import BaseAccordion from '@/components/base-accordion.vue'
import BaseAccordionItem from '@/components/base-accordion-item.vue'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Basic</h2>
      <component :is="Switch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>
        The accordion component allows the user to show and hide sections of related content on a
        page.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <component :is="BaseAccordion" :alwaysOpen="true">
        <component :is="BaseAccordionItem" title="Collapsible #1" content="Hello World"></component>
        <component :is="BaseAccordionItem" title="Collapsible #2" content="Hello World"></component>
        <component :is="BaseAccordionItem" title="Collapsible #3" content="Hello World"></component>
      </component>
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

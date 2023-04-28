<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-basic'
import BaseTreeview from '@/components/base-treeview.vue'

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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum reprehenderit minus quas
        cupiditate deleniti sint repellendus nesciunt commodi ducimus voluptatem repudiandae
        consequatur magni, dolore non tempora at quis? Quaerat, possimus.
      </p>
    </div>
    <div class="flex flex-col">
      <component :is="BaseTreeview" title="Parent 1" :is-open="true">
        <component :is="BaseTreeview" title="Child 1" :is-open="true">
          <component :is="BaseTreeview" title="Child 1.1"></component>
          <component :is="BaseTreeview" title="Child 1.2"></component>
        </component>
        <component :is="BaseTreeview" title="Child 2"> </component>
      </component>
      <component :is="BaseTreeview" title="Parent 2">
        <component :is="BaseTreeview" title="Child 1"></component>
        <component :is="BaseTreeview" title="Child 2"></component>
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

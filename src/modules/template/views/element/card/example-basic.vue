<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/switch.vue'
import { codeExample } from './example-basic'

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
    <div class="grid grid-cols-3 gap-4">
      <div class="card bg-primary p-4 text-white space-y-5">
        <h2>Primary Card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere cumque ipsam iusto
          nihil aperiam quasi repellendus nostrum assumenda odio provident accusamus reiciendis.
        </p>
      </div>
      <div class="card bg-secondary p-4 text-white space-y-5">
        <h2>Secondary Card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere cumque ipsam iusto
          nihil aperiam quasi repellendus nostrum assumenda odio provident accusamus reiciendis.
        </p>
      </div>
      <div class="card bg-info p-4 text-white space-y-5">
        <h2>Info Card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere cumque ipsam iusto
          nihil aperiam quasi repellendus nostrum assumenda odio provident accusamus reiciendis.
        </p>
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

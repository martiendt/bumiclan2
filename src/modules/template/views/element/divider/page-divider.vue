<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleHorizontal from './example-horizontal.vue'
import ExampleHorizontalWithText from './example-horizontal-with-text.vue'
import ExampleVertical from './example-vertical.vue'
import ExampleVerticalWithText from './example-vertical-with-text.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Divider</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Element', path: '/template/element' },
          { name: 'Divider' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <component :is="ExampleHorizontal" />
      <component :is="ExampleHorizontalWithText" />
      <component :is="ExampleVertical" />
      <component :is="ExampleVerticalWithText" />
    </div>
  </div>
</template>

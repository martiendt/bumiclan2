<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleSolid from './example-solid.vue'
import ExampleOutline from './example-outline.vue'
import ExampleIndicator from './example-indicator.vue'
import ExampleWithIcon from './example-with-icon.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Alert</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Element', path: '/template/element' },
          { name: 'Alert' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <component :is="ExampleSolid" />
      <component :is="ExampleOutline" />
      <component :is="ExampleIndicator" />
      <component :is="ExampleWithIcon" />
    </div>
  </div>
</template>

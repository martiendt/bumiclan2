<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleHorizontal from './example-horizontal.vue'
import ExamplePagination from './example-pagination.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Button Group</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Element', path: '/template/element' },
          { name: 'Button Group' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <component :is="ExampleHorizontal" />
      <component :is="ExamplePagination" />
    </div>
  </div>
</template>

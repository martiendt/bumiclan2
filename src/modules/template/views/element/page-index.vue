<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Element</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[{ name: 'Template', path: '/template' }, { name: 'Element' }]"
      />
    </div>
    <div class="main-content-body">
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <router-link to="/template/element/alert" class="btn btn-xl btn-system-color"
          >Alert</router-link
        >
        <router-link to="/template/element/avatar" class="btn btn-xl btn-system-color"
          >Avatar</router-link
        >
        <router-link to="/template/element/badge" class="btn btn-xl btn-system-color"
          >Badge</router-link
        >
        <router-link to="/template/element/button" class="btn btn-xl btn-system-color"
          >Button</router-link
        >
        <router-link to="/template/element/button-group" class="btn btn-xl btn-system-color"
          >Button Group</router-link
        >
        <router-link to="/template/element/breadcrumb" class="btn btn-xl btn-system-color"
          >Breadcrumb</router-link
        >
        <router-link to="/template/element/card" class="btn btn-xl btn-system-color"
          >Card</router-link
        >
        <router-link to="/template/element/divider" class="btn btn-xl btn-system-color"
          >Divider</router-link
        >
        <router-link to="/template/element/mask" class="btn btn-xl btn-system-color"
          >Mask</router-link
        >
        <router-link to="/template/element/progress" class="btn btn-xl btn-system-color"
          >Progress</router-link
        >
        <router-link to="/template/element/skeleton" class="btn btn-xl btn-system-color"
          >Skeleton</router-link
        >
        <router-link to="/template/element/spinner" class="btn btn-xl btn-system-color"
          >Spinner</router-link
        >
        <router-link to="/template/element/tooltip" class="btn btn-xl btn-system-color"
          >Tooltip</router-link
        >
        <router-link to="/template/element/typography" class="btn btn-xl btn-system-color"
          >Typography</router-link
        >
      </div>
    </div>
  </div>
</template>

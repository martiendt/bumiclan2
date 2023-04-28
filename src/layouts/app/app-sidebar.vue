<script setup lang="ts">
import AppSidebarShortcut from './app-sidebar-shortcut.vue'
import AppSidebarPanel from './app-sidebar-panel.vue'
</script>

<template>
  <!-- Main Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Shortcut -->
    <app-sidebar-shortcut></app-sidebar-shortcut>

    <!-- Sidebar Panel -->
    <app-sidebar-panel></app-sidebar-panel>
  </div>
</template>

<style scoped>
.is-sidebar-open .sidebar {
  @apply fixed w-full h-full bg-black/50 z-30 lg:bg-black/0 lg:w-0 lg:h-0;
}
</style>

<script setup lang="ts">
import ComponentDarkMode from './component-dark-mode.vue'
import ComponentNotification from './component-notification.vue'
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
</script>

<template>
  <!-- Header Wrapper-->
  <nav class="header">
    <!-- Header  -->
    <div class="relative w-full flex">
      <div class="w-full flex items-center justify-between">
        <!-- Left: Sidebar Toggle Button -->
        <div class="flex">
          <component :is="ComponentToggleSidebar" class="pr-4" />
          <h1 class="text-base font-extrabold lg:text-lg">
            BUMI <span class="font-normal">CLAN</span>
          </h1>
        </div>

        <!-- Right: Header Buttons -->
        <div class="flex items-center space-x-3">
          <div class="flex items-center space-x-3">
            <component :is="ComponentDarkMode" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.header {
  @apply fixed top-0 flex w-full h-60px z-20 px-4 bg-white dark:bg-slate-900 shadow;
}

.is-sidebar-open nav.header {
  @apply lg:w-[calc(100%-(var(--sidebar-shortcut-width)+var(--sidebar-panel-width)))] lg:ml-[calc(var(--sidebar-shortcut-width)+var(--sidebar-panel-width))] duration-200;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('all')
</script>

<template>
  <p-popper>
    <button
      class="relative rounded-full bg-slate-100 p-1 dark:bg-slate-700 focus:bg-slate-300/20 hover:bg-slate-300/20 dark:focus:bg-slate-300/20 dark:hover:bg-slate-300/20"
    >
      <i class="i-ph-bell-ringing h-20px w-20px flex items-center justify-center" />

      <span class="absolute h-2 w-2 flex items-center justify-center -right-px -top-px">
        <span
          class="absolute h-full w-full inline-flex animate-ping rounded-full bg-red-400 opacity-80"
        ></span>
        <span class="h-2 w-2 inline-flex rounded-full bg-red-400"></span>
      </span>
    </button>
    <template #content>
      <div
        class="popper-box shadow-soft dark:shadow-soft-dark mx-4 mt-1 max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex flex-col border border-slate-100 rounded-lg bg-white sm:m-0 sm:w-80 dark:border-slate-800 dark:bg-slate-700"
      >
        <div class="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
          <div class="flex items-center justify-between px-4 pt-2">
            <div class="flex items-center space-x-2">
              <h3 class="font-medium text-slate-700 dark:text-slate-100">Notifications</h3>
              <div
                class="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-slate/15 dark:text-slate"
              >
                2
              </div>
            </div>

            <button
              class="btn h-7 w-7 rounded-full p-0 -mr-1.5 active:bg-slate-300/25 focus:bg-slate-300/20 hover:bg-slate-300/20 dark:active:bg-slate-300/25 dark:focus:bg-slate-300/20 dark:hover:bg-slate-300/20"
            >
              <i icon="fa-regular fa-maximize"></i>
            </button>
          </div>

          <div class="scrollbar-hidden flex shrink-0 overflow-x-auto px-3">
            <button
              :class="
                activeTab === 'all'
                  ? 'border-primary dark:border-accent text-primary dark:text-slate'
                  : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-slate-100 dark:focus:text-slate-100'
              "
              class="btn shrink-0 border-b-2 rounded-none px-3.5 py-2.5"
              @click="activeTab = 'all'"
            >
              <span>All</span>
            </button>
            <button
              :class="
                activeTab === 'logs'
                  ? 'border-primary dark:border-accent text-primary dark:text-slate'
                  : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-slate-100 dark:focus:text-slate-100'
              "
              class="btn shrink-0 border-b-2 rounded-none px-3.5 py-2.5"
              @click="activeTab = 'logs'"
            >
              <span>Logs</span>
            </button>
          </div>
        </div>
        <div class="tab-content flex flex-col overflow-hidden">
          <div v-if="activeTab === 'all'" class="overflow-y-auto p-4 space-y-4">
            <div class="flex items-center space-x-3">
              <div
                class="h-10 w-10 flex shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15"
              >
                <i class="fa fa-user-edit text-secondary dark:text-secondary-light"></i>
              </div>
              <div>
                <p class="font-medium text-slate-600 dark:text-slate-100">User Photo Changed</p>
                <div class="line-clamp-1 mt-1 text-xs text-slate-400 dark:text-slate-300">
                  John Doe changed his avatar photo
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="h-10 w-10 flex shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
              >
                <i icon="fa-solid fa-pencil"></i>
              </div>
              <div>
                <p class="font-medium text-slate-600 dark:text-slate-100">
                  01 February 2022 <span class="text-xs font-light">08:00</span>
                </p>
                <div class="mt-1 flex text-xs text-slate-400 dark:text-slate-300">
                  <span class="line-clamp-1">Create new invoice</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'logs'" class="overflow-y-auto px-4">
            <div class="mt-8 pb-8 text-center">
              <img class="mx-auto w-36" src="@/assets/images/no-data.svg" alt="image" />
              <div class="mt-5">
                <p class="text-base font-semibold text-slate-700 dark:text-slate-100">Empty logs</p>
                <p class="text-slate-400 dark:text-slate-300">There are no unread logs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </p-popper>
</template>

<style scoped lang="postcss">
.das {
  @apply bg-coolGray text-slate-4;
}
</style>

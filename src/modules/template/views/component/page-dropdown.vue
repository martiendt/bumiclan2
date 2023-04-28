<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Dropdown</h2>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'template' }, { name: 'component' }, { name: 'dropdown' }]"
      />
    </div>
    <div class="card p-4 space-y-5">
      <h3>Dropdown</h3>
      <p>
        Breadcrumb consist of a list of links that help a user visualize a page's location within
        the hierarchical structure of a website.
      </p>
      <div>
        <p-popper placement="bottom-start">
          <button class="btn bg-blue-500 px-5 py-2">Trigger element</button>
          <template #content="contentProps">
            <div class="popper-root">
              <div
                class="popper-box shadow-soft dark:shadow-soft-dark mx-4 mt-1 max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex flex-col border-slate-100 rounded-lg bg-white sm:m-0 sm:w-80 dark:border-slate-800 dark:bg-slate-700"
              >
                <h4 class="px-4 py-3 font-medium tracking-wide text-slate-700 dark:text-slate-100">
                  Only Selected People
                </h4>
                <label class="relative flex">
                  <input
                    type="text"
                    class="form-input peer w-full border-slate-100 bg-transparent px-4 py-2 pl-9 text-sm !border-x-0 dark:border-slate-600 placeholder:text-slate-400/70 !focus:border-x-0"
                    placeholder="Type username..."
                  />
                  <div
                    class="peer-focus:text-primary dark:peer-focus:text-accent pointer-events-none absolute h-full w-10 flex items-center justify-center text-slate-400 dark:text-slate-300"
                  >
                    <!-- <i class="block i-far-search"></i> -->
                  </div>
                </label>
                <ul class="my-2">
                  <li>
                    <button
                      class="w-full flex items-center px-4 py-2 pr-8 text-left tracking-wide outline-none transition-all space-x-3.5 focus:bg-slate-100 hover:bg-slate-100 dark:focus:bg-slate-600 dark:hover:bg-slate-600"
                      @click="contentProps.close()"
                    >
                      <div>
                        <p class="line-clamp-1 text-slate-700 dark:text-slate-100">Simon Tods</p>
                        <p class="text-xs text-slate-500 dark:text-slate-300">Web Developer</p>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      class="w-full flex items-center px-4 py-2 pr-8 text-left tracking-wide outline-none transition-all space-x-3.5 focus:bg-slate-100 hover:bg-slate-100 dark:focus:bg-slate-600 dark:hover:bg-slate-600"
                      @click="contentProps.close()"
                    >
                      <div>
                        <p class="line-clamp-1 text-slate-700 dark:text-slate-100">Simon Tods</p>
                        <p class="text-xs text-slate-500 dark:text-slate-300">Web Developer</p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </p-popper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'

const activeTab = ref('all')
</script>

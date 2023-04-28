<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Select</h2>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'template' }, { name: 'form' }, { name: 'select' }]"
      />
    </div>
    <div class="card p-4 space-y-5">
      <div class="flex justify-between">
        <h3>Select</h3>
        <component :is="Switch" v-model="checked" label="code" />
      </div>
      <p>...</p>
      <label class="block">
        <span>What type of event is it?</span>
        <select
          class="form-select dark:focus:border-accent mt-1.5 w-full border border-slate-300 rounded-lg bg-white px-3 py-2 dark:border-slate-500 focus:border-primary hover:border-slate-400 dark:bg-slate-700 dark:hover:border-slate-400"
        >
          <option>Corporate event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Other</option>
        </select>
      </label>

      <div
        class="card transform-gpu bg-slate-800 px-2 text-white transition-all dark:bg-slate-700"
        :class="{
          'max-h-[1000px] overflow-auto py-2': checked,
          'max-h-0 overflow-hidden': !checked
        }"
      >
        <div class="p-1 text-sm">html</div>
        <highlightjs autodetect :code="''" />
      </div>
    </div>

    <div class="card p-4 space-y-5">
      <div class="flex justify-between">
        <h3>Select with Search</h3>
        <component :is="Switch" v-model="checked" label="code" />
      </div>
      <p>...</p>
      <div class="flex flex-col">
        <p-popper placement="bottom-start">
          <label class="input-group">
            <input type="text" class="form-input w-full" placeholder="Type username..." />
          </label>
          <template #content="contentProps">
            <div
              class="mx-4 mt-1 max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex flex-col border-slate-100 rounded-lg bg-white sm:m-0 sm:w-80 dark:border-slate-800 dark:bg-slate-700"
            >
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
          </template>
        </p-popper>
      </div>

      <div
        class="card transform-gpu bg-slate-800 px-2 text-white transition-all dark:bg-slate-700"
        :class="{
          'max-h-[1000px] overflow-auto py-2': checked,
          'max-h-0 overflow-hidden': !checked
        }"
      >
        <div class="p-1 text-sm">html</div>
        <highlightjs autodetect :code="''" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import Switch from '@/components/switch.vue'

const checked = ref(false)
</script>

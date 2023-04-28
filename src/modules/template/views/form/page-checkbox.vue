<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Checkbox</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Form', path: '/template/form' },
          { name: 'Checkbox' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <div class="card card-template">
        <div class="card-header">
          <h2>Basic</h2>
        </div>
        <div>
          <p>
            The Checkbox component creates a scalable, colorable element that can have text, icon or
            image within its shape.
          </p>
        </div>
        <div class="flex flex-col items-start gap-2">
          <input type="checkbox" />
          <input type="checkbox" disabled />
          <input type="checkbox" readonly />
        </div>
        <div></div>
      </div>
      <div class="card card-template">
        <div class="card-header">
          <h2>Basic</h2>
        </div>
        <div>
          <p>
            The Checkbox component creates a scalable, colorable element that can have text, icon or
            image within its shape.
          </p>
        </div>
        <div class="flex flex-col items-start gap-2">
          <label class="inline-flex items-center space-x-2">
            <input
              checked
              class="form-checkbox is-basic h-5 w-5 border-slate-400/70 rounded checked:border-slate-500 dark:border-slate-400 focus:border-slate-500 hover:border-slate-500 checked:bg-slate-500 dark:checked:bg-slate-400"
              type="checkbox"
            />
            <p>Default</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-basic h-5 w-5 border-slate-400/70 rounded checked:border-primary dark:border-slate-400 focus:border-primary hover:border-primary checked:bg-primary dark:checked:border-primary dark:focus:border-primary dark:hover:border-primary dark:checked:bg-primary"
              type="checkbox"
            />
            <p>Primary</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-basic h-5 w-5 border-slate-400/70 rounded checked:border-secondary dark:border-slate-400 focus:border-secondary hover:border-secondary checked:bg-secondary dark:checked:border-secondary-light dark:focus:border-secondary-light dark:hover:border-secondary-light dark:checked:bg-secondary-light"
              type="checkbox"
            />
            <p>Secondary</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-basic h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:bg-info checked:!border-info focus:!border-info hover:!border-info"
              type="checkbox"
            />
            <p>Info</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-basic h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:bg-success checked:!border-success focus:!border-success hover:!border-success"
              type="checkbox"
            />
            <p>Success</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-basic h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:bg-warning checked:!border-warning focus:!border-warning hover:!border-warning"
              type="checkbox"
            />
            <p>Warning</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <div class="h-5 w-5 border border-primary rounded">
              <input class="form-checkbox is-outline h-5 w-5 checked:bg-primary" type="checkbox" />
            </div>
            <p>Error</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:bg-danger checked:!border-danger focus:!border-danger hover:!border-danger"
              type="checkbox"
            />
            <p>Error</p>
          </label>
        </div>
        <div></div>
      </div>
      <div class="card card-template">
        <div class="card-header">
          <h2>Basic</h2>
        </div>
        <div>
          <p>
            The Checkbox component creates a scalable, colorable element that can have text, icon or
            image within its shape.
          </p>
        </div>
        <div class="flex flex-col items-start gap-2">
          <label class="inline-flex items-center space-x-2">
            <input
              checked
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded checked:border-slate-500 dark:border-slate-400 focus:border-slate-500 hover:border-slate-500 before:bg-slate-500 dark:checked:border-slate-200 dark:focus:border-slate-200 dark:hover:border-slate-200 dark:before:bg-slate-200"
              type="checkbox"
            />
            <p>Default</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent h-5 w-5 border-slate-400/70 rounded checked:border-primary dark:border-slate-400 focus:border-primary hover:border-primary before:bg-primary"
              type="checkbox"
            />
            <p>Primary</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded checked:border-secondary dark:border-slate-400 focus:border-secondary hover:border-secondary before:bg-secondary dark:checked:border-secondary-light dark:focus:border-secondary-light dark:hover:border-secondary-light dark:before:bg-secondary-light"
              type="checkbox"
            />
            <p>Secondary</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:fill-info checked:!border-info focus:!border-info hover:!border-info before:!bg-info"
              type="checkbox"
            />
            <p>Info</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:fill-success checked:!border-success focus:!border-success hover:!border-success before:!bg-success"
              type="checkbox"
            />
            <p>Success</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:!border-warning focus:!border-warning hover:!border-warning before:!bg-warning"
              type="checkbox"
            />
            <p>Warning</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
              class="form-checkbox is-outline h-5 w-5 border-slate-400/70 rounded dark:border-slate-400 checked:!border-danger focus:!border-danger hover:!border-danger before:!bg-danger"
              type="checkbox"
            />
            <p>Error</p>
          </label>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.form-checkbox {
  @apply before:ease-in-out appearance-none;
}

.form-checkbox {
  @apply inline-block ease-out before:absolute before:inset-0 before:h-full;
}

.form-checkbox.is-basic {
  /* background-image: var(--tw-thumb); */
  @apply inline-block border ease-out before:absolute before:inset-0 before:h-full;
  @apply bg-origin-border before:bg-center before:bg-no-repeat before:[background-size:100%_100%];
}

.form-checkbox.is-basic:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

.form-checkbox.is-outline {
  /* @apply bg-origin-border before:bg-center before:bg-no-repeat before:[background-size:100%_100%]; */
}
.form-checkbox.is-outline:checked {
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> */
  /* background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='currentColor' d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); */
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16'  xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  /* @apply !fill-green !text-green !fill-green !border-green; */
}
</style>

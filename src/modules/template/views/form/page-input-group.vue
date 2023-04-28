<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Avatar</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Element', path: '/template/element' },
          { name: 'Avatar' }
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
            The Avatar component creates a scalable, colorable element that can have text, icon or
            image within its shape.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="mb-5">
            <div class="flex">
              <div
                class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]"
              >
                @
              </div>
              <input
                type="text"
                placeholder="Username"
                class="form-input ltr:rounded-l-none rtl:rounded-r-none"
              />
            </div>
          </div>
          <div class="mb-5">
            <div class="flex">
              <input
                type="text"
                placeholder="Recipient's username"
                class="form-input ltr:rounded-r-none rtl:rounded-l-none"
              />
              <div
                class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-l-0 rtl:border-r-0 dark:border-[#17263c] ltr:rounded-r-md rtl:rounded-l-md dark:bg-[#1b2e4b]"
              >
                @example.com
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label for="url">Your vanity URL</label>
            <div class="flex">
              <div
                class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]"
              >
                https://
              </div>
              <input
                id="url"
                type="text"
                placeholder="example.com/users/"
                class="form-input ltr:rounded-l-none rtl:rounded-r-none"
              />
            </div>
          </div>
          <div class="mb-5">
            <div class="flex">
              <div
                class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]"
              >
                $
              </div>
              <input type="text" placeholder="" class="form-input rounded-none" />
              <div
                class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-l-0 rtl:border-r-0 dark:border-[#17263c] ltr:rounded-r-md rtl:rounded-l-md dark:bg-[#1b2e4b]"
              >
                .00
              </div>
            </div>
          </div>
          <div>
            <div class="flex">
              <div
                class="flex items-center justify-center whitespace-nowrap border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]"
              >
                With textarea
              </div>
              <textarea
                rows="4"
                class="form-textarea ltr:rounded-l-none rtl:rounded-r-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="card card-template">
        <div class="card-header">
          <h2>Basic</h2>
        </div>
        <div>
          <p>
            The Avatar component creates a scalable, colorable element that can have text, icon or
            image within its shape.
          </p>
        </div>
        <div class="flex flex-col">
          <!-- left -->
          <div class="flex">
            <div
              class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]"
            >
              <i class="i-far-book"></i>
            </div>
            <input
              id="iconLeft"
              type="text"
              placeholder="Notification"
              class="form-input ltr:rounded-l-none rtl:rounded-r-none"
            />
          </div>

          <!-- right -->
          <div class="flex">
            <input
              id="iconRight"
              type="text"
              placeholder="Notification"
              class="form-input ltr:rounded-r-none rtl:rounded-l-none"
            />
            <div
              class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-l-0 rtl:border-r-0 dark:border-[#17263c] ltr:rounded-r-md rtl:rounded-l-md dark:bg-[#1b2e4b]"
            >
              <i class="i-far-book"></i>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="card card-template">
        <div class="card-header">
          <h2>Basic</h2>
        </div>
        <div>
          <p>
            The Avatar component creates a scalable, colorable element that can have text, icon or
            image within its shape.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="flex">
            <div
              class="flex items-center justify-center border border-[#e0e6ed] bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]"
            >
              First and last name
            </div>
            <input
              type="text"
              placeholder="First Name"
              class="form-input flex-1 rounded-none ltr:border-r-0 rtl:border-l-0 focus:!border-l focus:!border-r"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="form-input flex-1 ltr:rounded-l-none rtl:rounded-r-none"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div class="space-y-4">
        <label class="relative flex">
          <input
            class="form-input peer focus:border-primary dark:focus:border-accent dark:border-slate-500 dark:hover:border-slate-400 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400"
            placeholder="Search here..."
            type="text"
          />
          <div
            class="peer-focus:text-primary dark:peer-focus:text-accent dark:text-slate-300 pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400"
          >
            <i class="block i-far-magnifying-glass"></i>
          </div>
        </label>
        <label class="relative flex">
          <input
            class="form-input peer focus:border-primary dark:focus:border-accent dark:border-slate-500 dark:hover:border-slate-400 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:border-slate-400"
            placeholder="Password"
            type="text"
          />
          <div
            class="peer-focus:text-primary dark:peer-focus:text-accent dark:text-slate-300 pointer-events-none absolute right-0 flex h-full w-10 items-center justify-center text-slate-400"
          >
            <i class="block i-far-eye"></i>
          </div>
        </label>
        <label class="relative flex">
          <input
            class="form-input peer focus:border-primary dark:focus:border-accent dark:border-slate-500 dark:hover:border-slate-400 w-full rounded-lg border border-slate-300 bg-transparent px-9 py-2 placeholder:text-slate-400/70 hover:border-slate-400"
            placeholder="Search here..."
            type="text"
          />
          <div
            class="peer-focus:text-primary dark:peer-focus:text-accent dark:text-slate-300 pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400"
          >
            <i class="block i-far-magnifying-glass"></i>
          </div>
          <div
            class="peer-focus:text-primary dark:peer-focus:text-accent dark:text-slate-300 pointer-events-none absolute right-0 flex h-full w-10 items-center justify-center text-slate-400"
          >
            <div
              class="border-slate-100 dark:border-slate-500 dark:border-r-slate-300 h-5 w-5 animate-spin rounded-full border-2 border-r-slate-400"
            ></div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

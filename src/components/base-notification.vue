<script setup lang="ts"></script>

<template>
  <notifications position="bottom right" :duration="5000">
    <template #body="props">
      <div
        class="card-header items-start rounded-xl bg-yellow-100 text-yellow-600 shadow space-x-2 my-1 mx-4"
      >
        <div class="flex gap-2">
          <div class="bg-warning rounded-l-xl items-start justify-center flex p-1"></div>
          <div class="flex flex-col py-2">
            <p class="font-bold">
              {{ props.item.title }}
            </p>
            <p>
              {{ props.item.text }}
            </p>
          </div>
        </div>
        <button type="button" class="hover:opacity-80 p-2" @click="props.close()">
          <i class="i-fas-xmark block"></i>
        </button>
      </div>
    </template>
  </notifications>
</template>

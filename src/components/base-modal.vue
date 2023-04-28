<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const isOpen = ref(props.isOpen)

const emit = defineEmits(['onClose'])

const close = () => {
  isOpen.value = false
}

watch(isOpen, (newData) => {
  if (newData === false) {
    emit('onClose')
  }
})

watch(props, () => {
  isOpen.value = props.isOpen
})
</script>

<template>
  <div v-if="isOpen" class="modal-dialog">
    <!-- Modal Backdrop  -->
    <div class="modal-backdrop" @click="close()"></div>
    <!-- Modal Container -->
    <div class="m-10">
      <div class="modal-container">
        <button type="button" @click="close()" class="btn absolute top-2 right-0">
          <i class="i-fas-xmark block"></i>
        </button>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-dialog {
  @apply fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden;
}
.modal-backdrop {
  @apply absolute inset-0 bg-slate-900/80 transition-opacity duration-300;
}
.modal-container {
  @apply dark:bg-slate-700 relative lg:max-w-xl rounded-2xl bg-white text-center transition-opacity duration-300;
}
</style>

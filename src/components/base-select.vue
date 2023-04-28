<template>
  <p-popper placement="bottom-start" class="!block" :show="isShow">
    <label class="input-group">
      <input
        v-model="modelValue"
        type="text"
        class="form-input"
        :placeholder="props.placeholder"
        @focus="isShow = true"
        @blur="onBlur()"
      />
    </label>
    <template #content>
      <slot>
        <div
          class="mx-4 mt-1 max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex flex-col border-slate-100 rounded-lg bg-white sm:m-0 sm:w-[768px] dark:border-slate-800 dark:bg-slate-700"
        >
          <div v-if="isLoading" class="p-4">Loading ...</div>
          <div v-if="!isLoading && options.length === 0" class="p-4">Datax not found</div>
          <ul v-if="!isLoading && options.length > 0" class="my-2"></ul>
        </div>
      </slot>
    </template>
  </p-popper>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

export interface OptionInterface {
  value: string
  label: string
}

const props = defineProps<{
  modelValue: string
  placeholder?: string
  options: OptionInterface[]
}>()

const modelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue', 'blur'])

watch(modelValue, (newData) => {
  console.log(newData)
  emit('update:modelValue', newData)
})

watch(props.options, (newData) => {
  console.log(newData)
})

const isShow = ref(false)
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  isLoading.value = false
})

const onBlur = () => {
  emit('blur')
  isShow.value = false
}
</script>

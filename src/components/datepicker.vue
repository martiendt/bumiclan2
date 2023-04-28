<template>
  <div class="relative">
    <input ref="dateRef" v-model="nativeDate" type="date" class="form-input absolute -z-50" />
    <button class="absolute right-0 top-1 px-4 py-2" @click="onClickDateRef()">
      <i class="block i-far-calendar"></i>
    </button>
    <input
      v-model="modelValue"
      v-cleave="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
      type="text"
      class="form-input"
      placeholder="DD-MM-YYYY"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import dayjs from 'dayjs'

export interface Props {
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})

const modelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(modelValue, (newData) => {
  emit('update:modelValue', newData)
})

/**
 * HTMLInputElement.showPicker()
 *
 * This is the same picker that would normally be displayed when the element
 * is selected, but can be triggered from a button press or other user interaction.
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker
 */
const dateRef = ref()
const onClickDateRef = () => {
  dateRef.value.showPicker()
}
const nativeDate = ref()

watch(nativeDate, (newValue) => {
  modelValue.value = dayjs(new Date(newValue)).format('DD-MM-YYYY')
})
</script>

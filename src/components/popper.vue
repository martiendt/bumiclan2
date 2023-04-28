<template>
  <component :is="Popper" v-bind="$attrs" placement="bottom">
    <slot />
    <template #content="contentProps">
      <slot name="content" v-bind="contentProps" />
    </template>
  </component>
</template>

<script setup lang="ts">
import Popper from 'vue3-popper'

const props = defineProps({
  placement: {
    required: false,
    default: 'bottom'
  }
})
</script>

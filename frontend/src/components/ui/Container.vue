<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  maxWidth: {
    type: String,
    default: 'xl',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value),
  },
  padding: {
    type: Boolean,
    default: true,
  },
});

const containerClasses = computed(() => {
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const base = 'mx-auto w-full';
  const paddingClass = props.padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return `${base} ${maxWidths[props.maxWidth]} ${paddingClass}`;
});
</script>

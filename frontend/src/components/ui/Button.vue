<template>
  <button
    :class="buttonClasses"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);

const buttonClasses = computed(() => {
  const base = 'font-medium rounded-full transition-all duration-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-black text-white border border-white hover:bg-gray-900',
    outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return `${base} ${variants[props.variant]} ${sizes[props.size]}`;
});
</script>

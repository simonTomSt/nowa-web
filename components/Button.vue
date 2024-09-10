<template>
  <button v-bind="props" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

/* @vue-ignore */
interface Props extends ButtonHTMLAttributes {
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const buttonClasses = computed(() => {
  const variantClasses = {
    primary: 'bg-secondary text-white',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

  return [
    'font-semibold rounded-md focus:outline-none transition duration-200 ease-in-out text-sm px-[22px] py-[18px] h-[50px] flex justify-center items-center text-poppins',
    variantClasses[props.variant] || variantClasses.primary,
    disabledClasses,
    props.class,
  ].join(' ');
});
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // e.g., primary, secondary, danger
  },
  size: {
    type: String,
    default: 'md', // e.g., sm, md, lg
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  const baseClasses = [
    'font-semibold',
    'rounded',
    'focus:outline-none',
    'transition',
    'duration-200',
    'ease-in-out',
  ];

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

  return [
    ...baseClasses,
    variantClasses[props.variant] || variantClasses.primary,
    sizeClasses[props.size] || sizeClasses.md,
    disabledClasses,
  ].join(' ');
});

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

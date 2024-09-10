<template>
  <div>
    <button
      :class="[
        'tham tham-e-squeeze tham-w-7 ',
        isMenuOpen ? 'tham-active' : '',
      ]"
      @click="toggleMenu"
    >
      <div class="tham-box">
        <div class="tham-inner !bg-white" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NavLinks } from './types';
const props = defineProps<{ navLinks: NavLinks[] }>();
const isMenuOpen = useState('isMenuOpen', () => false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

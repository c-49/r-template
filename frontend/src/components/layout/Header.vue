<template>
  <header class="bg-black py-4 fixed top-0 left-0 right-0 z-50">
    <Container>
      <div class="flex items-center justify-between">
        <!-- Left Navigation -->
        <nav class="flex items-center space-x-8">
          <router-link
            v-for="link in leftNavLinks"
            :key="link.path"
            :to="link.path"
            class="text-white text-base hover:text-gray-300 transition-colors"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <!-- Logo (Center) -->
        <router-link to="/" class="flex flex-col items-center">
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1">
            <!-- Placeholder for logo icon -->
            <span class="text-black text-xl font-bold">C</span>
          </div>
          <span class="text-white font-bold text-sm">Cheffest</span>
          <span class="text-white text-xs opacity-75">{{ $t('header.tagline') }}</span>
        </router-link>

        <!-- Right Navigation (placeholder for future features) -->
        <div class="w-48"></div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Container from '../ui/Container.vue';

const leftNavLinks = ref([
  { label: 'Welcome', path: '/' },
  { label: 'Our Menu', path: '/menu' },
  { label: 'Franchise', path: '/franchise' },
  { label: 'Contact', path: '/contact' },
]);
</script>

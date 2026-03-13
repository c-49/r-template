<template>
  <header class="bg-black py-4 fixed top-0 left-0 right-0 z-50">
    <Container>
      <!-- Mobile Header -->
      <div class="lg:hidden">
        <div class="flex items-center justify-between">
          <!-- Hamburger Menu -->
          <button
            @click="toggleMobileMenu"
            class="text-white p-2 hover:bg-gray-800 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Logo (Center) -->
          <router-link to="/" class="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-1">
              <span class="text-black text-lg font-bold">C</span>
            </div>
            <span class="text-white font-bold text-xs">Cheffest</span>
          </router-link>

          <!-- Right spacer -->
          <div class="w-10"></div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <transition name="slide-down">
          <nav
            v-if="mobileMenuOpen"
            class="absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4"
          >
            <div class="flex flex-col space-y-4 px-4">
              <router-link
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="text-white text-base hover:text-gray-300 transition-colors py-2"
                @click="closeMobileMenu"
              >
                {{ link.label }}
              </router-link>
            </div>
          </nav>
        </transition>
      </div>

      <!-- Desktop Header -->
      <div class="hidden lg:flex items-center justify-between">
        <!-- Left Navigation -->
        <nav class="flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
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
            <span class="text-black text-xl font-bold">C</span>
          </div>
          <span class="text-white font-bold text-sm">Cheffest</span>
        </router-link>

        <!-- Right spacer -->
        <div class="w-48"></div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Container from '../ui/Container.vue';

const mobileMenuOpen = ref(false);

const navLinks = ref([
  { label: 'Welcome', path: '/' },
  { label: 'Our Menu', path: '/menu' },
  { label: 'Franchise', path: '/franchise' },
  { label: 'Contact', path: '/contact' },
]);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

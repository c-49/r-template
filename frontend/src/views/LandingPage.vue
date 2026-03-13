<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center pt-20">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6">
            <h1 class="text-white font-bold text-5xl lg:text-6xl leading-tight">
              {{ $t('landing.hero.title') }}
            </h1>
            <p class="text-white text-lg opacity-90">
              {{ $t('landing.hero.subtitle') }}
            </p>
            <div>
              <Button size="lg" @click="handleOrderClick">
                {{ $t('landing.hero.cta') }}
              </Button>
            </div>
          </div>

          <!-- Right Content - Hero Image -->
          <div class="relative h-96 lg:h-full flex items-center justify-center">
            <img
              :src="heroImage"
              alt="Delicious burger"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>

      <!-- Background decoration -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-50"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Container from '../components/ui/Container.vue';
import Button from '../components/ui/Button.vue';

const heroImage = ref('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop');

const handleOrderClick = () => {
  // Navigate to menu or order page
  console.log('Order clicked');
};
</script>

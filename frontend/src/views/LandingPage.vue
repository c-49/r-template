<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 lg:pt-32">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          :src="heroImage"
          alt="Delicious burger"
          class="w-full h-full object-cover opacity-70 lg:opacity-50"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/60 lg:to-transparent"></div>
      </div>

      <Container class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 lg:py-0">
          <!-- Content -->
          <div class="space-y-6 text-center lg:text-left px-4 lg:px-0">
            <h1 class="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              {{ $t('landing.hero.title') }}
            </h1>
            <p class="text-white text-base sm:text-lg opacity-90 max-w-md mx-auto lg:mx-0">
              {{ $t('landing.hero.subtitle') }}
            </p>
            <div class="pt-4">
              <Button size="lg" class="w-full sm:w-auto" @click="handleOrderClick">
                {{ $t('landing.hero.cta') }}
              </Button>
            </div>
          </div>

          <!-- Desktop Hero Image (visible only on large screens as accent) -->
          <div class="hidden lg:flex relative h-96 lg:h-[600px] items-center justify-center">
            <img
              :src="heroImage"
              alt="Delicious burger accent"
              class="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Container from '../components/ui/Container.vue';
import Button from '../components/ui/Button.vue';

const heroImage = ref('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=800&fit=crop');

const handleOrderClick = () => {
  // Navigate to menu or order page
  console.log('Order clicked');
};
</script>

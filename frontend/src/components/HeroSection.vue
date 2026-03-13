<template>
  <section class="hero bg-cover bg-center h-screen" :style="`background-image: url(${config.heroImage})`">
    <div class="container mx-auto text-center text-white">
      <h1 class="text-4xl font-heading">{{ $t('hero.title') }}</h1>
      <p class="mt-2 text-xl">{{ $t('hero.tagline') }}</p>
    </div>
  </section>
</template>

<script setup>
import { useConfigStore } from '../store';
const config = useConfigStore().site;
</script>

<style scoped>
.hero {
  /* additional styling */
}
</style>

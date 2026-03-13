<template>
  <div class="min-h-screen bg-black">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/layout/Header.vue';
</script>

<style>
/* global styles could go here */
</style>

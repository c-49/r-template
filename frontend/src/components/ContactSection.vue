<template>
  <section class="contact py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-heading">{{ $t('contact.title') }}</h2>
      <form @submit.prevent="submitForm" class="mt-4 space-y-4">
        <input type="text" placeholder="{{ $t('contact.name') }}" class="w-full border p-2" v-model="form.name" />
        <input type="email" placeholder="{{ $t('contact.email') }}" class="w-full border p-2" v-model="form.email" />
        <textarea placeholder="{{ $t('contact.message') }}" class="w-full border p-2" v-model="form.message"></textarea>
        <button type="submit" class="bg-primary text-white px-4 py-2">{{ $t('contact.submit') }}</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({ name: '', email: '', message: '' });

function submitForm() {
  // placeholder: send to backend
  console.log('submitted', form);
}
</script>

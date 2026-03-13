<template>
  <section class="menu py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-heading">{{ $t('menu.title') }}</h2>
      <template v-if="menu && menu.length">
        <div v-for="category in menu" :key="category.id" class="category my-8">
          <h3 class="text-2xl font-heading">{{ category.name }}</h3>
          <ul>
            <li v-for="item in category.items" :key="item.id" class="flex justify-between py-2">
              <span>{{ item.name }}</span>
              <span>{{ formatPrice(item.price) }}</span>
            </li>
          </ul>
        </div>
      </template>
      <div v-else class="text-center text-gray-500">
        {{ $t('menu.empty') }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useConfigStore } from '../store';
const store = useConfigStore();

onMounted(() => {
  store.fetchMenu();
});

const menu = computed(() => store.menu);

function formatPrice(value) {
  if (value == null) return '';
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(value);
}
</script>

<style scoped>
/* menu styling */
</style>

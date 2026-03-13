import { defineStore } from 'pinia';
import { siteConfig } from '../config';

const fallbackMenu = [
  {
    id: 1,
    name: 'Appetizers',
    items: [
      { id: 1, name: 'Bruschetta', price: 8.99, available: true },
      { id: 2, name: 'Calamari Fritti', price: 10.99, available: true },
    ],
  },
  {
    id: 2,
    name: 'Main Courses',
    items: [
      { id: 3, name: 'Grilled Salmon', price: 22.99, available: true },
      { id: 4, name: 'Pasta Carbonara', price: 16.99, available: true },
    ],
  },
  {
    id: 3,
    name: 'Desserts',
    items: [
      { id: 5, name: 'Tiramisu', price: 7.99, available: true },
      { id: 6, name: 'Panna Cotta', price: 6.99, available: true },
    ],
  },
];

export const useConfigStore = defineStore('config', {
  state: () => ({
    site: {
      ...siteConfig,
    },
    menu: fallbackMenu,
  }),
  actions: {
    async fetchMenu() {
      try {
        const api = await import('../services/api');
        const res = await api.default.get('/menu');
        this.menu = res.data;
      } catch (err) {
        console.error('fetchMenu error', err);
        // fallback: use default menu if API fails
        this.menu = fallbackMenu;
      }
    },
  },
});

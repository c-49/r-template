import { defineStore } from 'pinia';
import { siteConfig } from '../config';

export const useConfigStore = defineStore('config', {
  state: () => ({
    site: {
      ...siteConfig,
    },
    menu: [],
  }),
  actions: {
    async fetchMenu() {
      try {
        const api = await import('../services/api');
        const res = await api.default.get('/menu');
        this.menu = res.data;
      } catch (err) {
        console.error('fetchMenu error', err);
        // fallback: if network fails or no data, ensure menu is at least an empty array
        if (!this.menu || !this.menu.length) {
          this.menu = [];
        }
      }
    },
  },
});

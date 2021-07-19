import { defineStore } from 'pinia';

export const useAppStore = defineStore({
   id: 'appStore',
   state: () => ({
      dataFrom: 'client'
   })
});

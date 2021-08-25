import 'virtual:windi.css';

import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { viteSSR } from 'vite-ssr/vue';

import { routes } from '/src/router/router';

import App from '/src/App.vue';

const Options: Parameters<typeof viteSSR>['1'] = {
   routes,
   pageProps: {
      passToPage: false
   },
};

export default viteSSR(App, Options, async (params) => {
   const { app, initialState, isClient, router } = params;
   const head = createHead();
   const pinia = createPinia();

   app.use(pinia).use(head);

   if (isClient) {
      pinia.state.value = initialState.pinia;
   } else {
      initialState.pinia = pinia.state.value;
   }

   return {
      head
   };
});

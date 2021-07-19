<script lang="ts" setup>
import { useHead } from '@vueuse/head';

useHead({
   meta: [{ name: 'og:site_name', content: 'Vite SSR Example Project' }]
});
</script>

<template>
   <div id="navbar">
      <RouterLink class="link" :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink class="link" :to="{ name: 'Products' }">Products</RouterLink>
   </div>

   <div id="app-body">
      <RouterView v-slot="{ Component }">
         <Suspense>
            <component :is="Component" />
         </Suspense>
      </RouterView>
   </div>
</template>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   #navbar {
      @apply w-full h-50px bg-gradient-2 px-2 flex items-center shadow;
   }

   #app-body {
      @apply p-3;
   }
}

.link {
   @apply p-2 text-dark-500 hover:text-violet-800;
   &.router-link-active {
      @apply font-bold;
   }
}
</style>

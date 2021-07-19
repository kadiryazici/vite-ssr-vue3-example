<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { onServerPrefetch } from 'vue';
import { useAppStore } from '/src/stores/appStore';

const appStore = useAppStore();
useHead({
   title: 'Home'
});

onServerPrefetch(() => {
   appStore.dataFrom = 'server';
});
</script>

<template>
   <div class="text-center">Vite SSR Example Project</div>
   <div>Message From: {{ appStore.dataFrom }}</div>
</template>

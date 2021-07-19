<script lang="ts" setup>
import { useAsyncData } from '/src/helpers/useAsyncData';
import Card from '/src/components/Card.vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

const route = useRoute();
interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
}

const productData = await useAsyncData<Product>(
   `product-${route.params.id || 'data'}`,
   `https://fakestoreapi.com/products/${route.params.id}`
);

useHead({
   meta: [
      { name: 'og:description', content: productData.value?.description },
      { name: 'og:image', content: productData.value?.image },
      { name: 'og:title', content: productData.value?.title }
   ]
});
</script>

<template>
   <div class="flex flex-row flex-wrap px-10 justify-center">
      <template v-if="productData">
         <Card style="width: 100%" :key="productData.id" :product="productData" />
      </template>
   </div>
</template>

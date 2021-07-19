<script lang="ts" setup>
import { useAsyncData } from '/src/helpers/useAsyncData';
import Card from '/src/components/Card.vue';
import { useHead } from '@vueuse/head';

useHead({
   title: 'Products'
});

interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
}

const productData = await useAsyncData<Product[]>(
   'productsData',
   'https://fakestoreapi.com/products/',
   {
      axiosConfig: {},
      awaitSetup: false
   }
);
</script>

<template>
   <div class="flex flex-row flex-wrap px-10 justify-center">
      <template v-if="productData">
         <Card v-for="product in productData" :key="product.id" :product="product" />
      </template>
      <h3 v-else>Loading...</h3>
   </div>
</template>

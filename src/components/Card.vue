<script lang="ts" setup>
interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
}
interface Props {
   product: Product;
}

const props = defineProps<Props>();
</script>

<template>
   <RouterLink :to="{ name: 'Product', params: { id: product.id } }" class="card">
      <div class="card-img">
         <img loading="lazy" :src="product.image" alt="image of card" />
      </div>
      <div class="card-body">
         <h4 class="card-title text-center">{{ product.title }}</h4>
         <small class="card-detail">{{ product.description }}</small>
         <div class="card-price">{{ product.price }}$</div>
      </div>
   </RouterLink>
</template>

<style lang="scss" scoped>
.card {
   @apply transition-all hover:z-40 hover:scale-105 transform cursor-pointer flex flex-col w-350px m-3 rounded-15px border-light-600 overflow-hidden text-left;
   box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
   .card-img {
      @apply p-1 flex-shrink-0 h-150px overflow-hidden flex justify-center bg-white;
      img {
         @apply h-full object-center object-fill;
      }
   }
   .card-body {
      @apply flex flex-col p-2 bg-light-200 mt-2 h-full;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      box-shadow: 0px -3px 3px -3px rgba(0, 0, 0, 0.2);

      .card-title {
         @apply pb-2 font-bold;
      }
      .card-detail {
         @apply h-full;
      }
      .card-price {
         @apply font-bold text-blue-400;
      }
   }
}
</style>

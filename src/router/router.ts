import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'Home',
      component: () => import('/src/pages/Home.vue')
   },
   {
      path: '/products',
      name: 'Products',
      component: () => import('/src/pages/Products.vue')
   },
   {
      path: '/product/:id',
      name: 'Product',
      component: () => import('/src/pages/Product.vue')
   }
];

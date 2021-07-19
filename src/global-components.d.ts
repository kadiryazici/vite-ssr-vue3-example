import { RouterLink, RouterView, RouteLocationNormalized } from 'vue-router';
import { VNode } from 'vue';

declare module 'vue' {
   interface GlobalComponents {
      RouterLink: typeof RouterLink;
      RouterView: typeof RouterView & {
         __VLS_slots: {
            default: {
               Component: VNode;
               route: RouteLocationNormalized & { href: string };
            };
         };
      };
   }
}

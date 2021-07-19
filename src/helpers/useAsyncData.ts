import { useContext } from 'vite-ssr/vue';
import { onMounted, onUnmounted, Ref, ref, getCurrentInstance, onDeactivated } from 'vue';
import axios, { AxiosRequestConfig } from 'axios';

interface Config {
   axiosConfig: AxiosRequestConfig;
   /**
    * For Client, if {true} asyncData will try to block component's initialization
    * if {false} it will fetch the data onMounted hook.
    */
   awaitSetup: boolean;
}

export async function useAsyncData<T>(key: string, location: string, config?: Partial<Config>) {
   const { isClient, initialState } = useContext();
   //- craete a ref via initialState[key] value
   const responseValue = ref(initialState[key] || null) as Ref<T | null>;
   //- Axios get request
   const request = () => axios.get<T>(location, config?.axiosConfig);

   //- request handler function, to prevent code duplication I created inline function.
   const handler = async (type: 'server' | 'client') => {
      try {
         const { data } = await request();
         responseValue.value = data;
         if (type === 'server') initialState[key] = data;
      } catch (error) {
         throw error;
      }
   };

   // remove data from initialState when component unmounts or deactivates
   onUnmounted(() => {
      //- make sure that it is client
      if (isClient) initialState[key] = null;
   });
   onDeactivated(() => {
      if (isClient) initialState[key] = null;
   });

   //- is this function running on server side
   if (!isClient) {
      await handler('server');
   } else {
      //- if this function is running on client side

      //- if initialState[key] already exists mutate responseValue.value
      if (initialState[key]) {
         responseValue.value = initialState[key];
      } else {
         //- if inital state value does not exist fetch the data in onMounted hook.
         const fn = async () => {
            await handler('client');
         };
         if (config?.awaitSetup) {
            await fn();
         } else {
            onMounted(fn);
         }
      }
   }

   return responseValue;
}

<template>
    <div class="home q-pa-xl" v-if="products">
     <div class="row">
       <div v-for="item in products" :key="item.id" class="col-md-2.1" style="height ;">
         <!-- Adjust the col-md-4 class based on your desired layout -->
         <div class="flex">
           <div class="col">
             <ItemCardVue :item="item" />
           </div>
         </div>
       </div>
     </div>
   </div>
   </template>
   
   <script>
   import getData from '@/data/getData'
   import { onMounted, ref } from 'vue';
   import ItemCardVue from '@/views/itemCard.vue'
   // @ is an alias to /src
   
   export default {
     name: 'HomeView',
     components: {
       ItemCardVue
     },
     setup(){
       const products = ref (null) 
       onMounted (async()=>{
         products.value=await getData('https://fakestoreapi.com/products/')
       })
       return{
         products
       }
      
   
     }
   }
   </script>
   
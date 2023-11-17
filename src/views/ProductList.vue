
<template>
  <div class="home q-pa-xl">

    <div class="row">
      <div v-for="item in products" :key="item.id" class="col-md-4" style="height;">
        <div class="flex" @click="openModal(item)">
          <div class="col">
            <ItemCardVue :item="item" />
          </div>
        </div>
      </div>
    </div>

    <q-dialog v-model="card">
      <q-card style="padding-top: 20px;" class="my-card">
        <div style="display: flex;justify-content: center;align-items: center;"> <q-img style="width: 30%;display: flex; font-family: verdana;" :src="selectedProduct.image" /></div>
    
        <q-card-section>
          <!-- Display detailed information about the selected product -->
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ selectedProduct.title }}
            </div>
            <!-- Add more details as needed -->
          </div>
          <q-rating v-model="selectedProduct.stars" :max="5" size="32px" />
        </q-card-section>
        
        <q-card-section class="q-pt-none">
          <div class="text-subtitle1" style="font-size: 2em; display: flex;">
           <div style="color: orangered;">${{ selectedProduct.price }} </div> 
           <div style="margin-left: 10px;">   {{ selectedProduct.category }}</div> 
        
          </div>
          <div class="text-caption text-grey">
            {{ selectedProduct.description }}
          </div>
        </q-card-section>
        
        <q-separator />

        <q-card-actions align="right" style="display: flex;justify-content: space-between;">
          <div>
            <q-btn v-close-popup flat color="primary" label="Quantity" style="  "/>
          </div>
          
        <div>
          <q-btn v-close-popup flat color="primary" label="-" style="border: 1px solid #E5E5E4   ; width: 10px;"/>
          <q-btn v-close-popup flat color="primary" label="" style="border: 1px solid #E5E5E4   ; "/>
          <q-btn v-close-popup flat color="primary" label="+" style="border: 1px solid #E5E5E4   ; "/>
        </div>
          
        </q-card-actions>
        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Buy" style="background-color:#E5E5E4 ; margin-right: 10px;"/>
          <q-btn v-close-popup flat color="primary" label="add to cart" style="background-color: #E5E5E4;"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import getData from '@/data/getData'
import { onMounted, ref } from 'vue';
import ItemCardVue from '@/views/itemCard.vue';

export default {
  name: 'HomeView',
  components: {
    ItemCardVue
  },
  setup() {
    const products = ref(null);
    const selectedProduct = ref(null);
    const card = ref(false);

    onMounted(async () => {
      products.value = await getData('https://fakestoreapi.com/products/');
    });

    const openModal = (item) => {
      selectedProduct.value = item;
      card.value = true;
    };

    return {
      products,
      selectedProduct,
      card,
      openModal,
    };
  },
};
</script>

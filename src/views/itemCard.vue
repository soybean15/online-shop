<template>


    <div class="q-pa-md row items-end q-gutter-md">
      <q-card class="my-card " style="width: 200px;height: 270px;border-style: none ;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;" >
<div style="height: 150px; padding: 20px;"><q-img class="product-image " :ratio="16/9" fit="contain"
          :src="item.image"
        /></div>
        
  
        <q-card-section  >
          <div class=" title " style="color:grey">{{ item.category }}</div>
          <div class=" title " style="font-weight: ;">{{ item.title }}</div>
          <!-- <div class="text-caption text-grey">{{ item.description }}
             </div> -->
             <div class=" title " style="color: orange;font-size: 15px;">${{ item.price }}</div>
        </q-card-section>
  
        <!-- <q-card-actions>
          <q-btn flat color="primary" label="Share" />
          <q-btn flat color="secondary" label="Book" />
  
          <q-space />
  
          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions> -->
  
        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subtitle2">
              
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    props: ['item'],
    setup () {
      return {
        expanded: ref(false),
       
      }
    }
  }
  </script>
  
  <style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 350px
  .title 
    font-size: 11px
  </style>
  
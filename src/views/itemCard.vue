<template>


    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card " style="width: 200px;height: 200px;" flat bordered>
<div style="height: 100px; padding: 10px;"><q-img class="product-image " :ratio="16/9" fit="contain"
          :src="item.image"
        /></div>
        
  
        <q-card-section  >
          <div class=" title " style="">{{ item.title }}</div>
          <!-- <div class="text-caption text-grey">{{ item.description }}
             </div> -->
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
    font-size: 10px
  </style>
  
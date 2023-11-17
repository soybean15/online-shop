<template>
  <div style="margin-top: 50px; width: 100%; "><img src="../assets/poster.jpg" style="width: 100%; height:230px; object-fit: cover; object-position: top;"></div>


<div style="display: flex;margin-left: 20px;"> 
  <div style="width: 30%; margin-top: 50px;">

  <div class="q-pa-md" style="max-width: 400px;">
    <q-list dense bordered padding class="rounded-borders" style="background-color: white;border:none;font-family: verdana;color:gray ;box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
      <q-item clickable v-ripple>
        <q-item-section style="padding-top: 10px; padding-bottom: 10px;">
          Men's Clothing
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section style="padding-top: 10px; padding-bottom: 10px;">
          Women's Clothing
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section style="padding-top: 10px; padding-bottom: 10px;">
          Jewelery
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section style="padding-top: 10px; padding-bottom: 10px;">
          Electronics
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div><img src="../assets/poster2.jpg" style="width: 92%; margin-left: 15px;"></div>
  
</div>

<div style="width: 70%;">
  <div  class="row" >
    <div class="col-12" style=" "><ProductList></ProductList></div>
    <div class="col"></div>
  </div>
</div>

</div>
</template>

<script>
import ProductList from './ProductList.vue';
export default {
components:{ProductList}
}
</script>

<style>

body{
  background-color:#F2F3F2;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>
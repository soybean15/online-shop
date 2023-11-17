<!-- MyModal.vue -->
<template>
    <q-dialog v-model="innerShowModal" @hide="onModalClose">
      <q-card class="my-card">
        <!-- Modal content here -->
        <q-card-section>
          <q-img :src="modalItem.image" />
  
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ modalItem.name }}
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              {{ modalItem.distance }} ft
            </div>
          </div>
  
          <!-- Other modal content here -->
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions align="right">
          <q-btn flat color="primary" label="Reserve" />
          <q-btn flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script>
  export default {
    props: {
      showModal: Boolean,
      modalItem: Object,
    },
    data() {
      return {
        innerShowModal: false,
      };
    },
    watch: {
      showModal(newVal) {
        this.innerShowModal = newVal;
      },
    },
    methods: {
      onModalClose() {
        this.$emit('update:showModal', false); // Emitting the custom event
      },
    },
  };
  </script>
  
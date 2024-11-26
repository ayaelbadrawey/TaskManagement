<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="my-2 row">
    <Sidebar class="col-lg-2 col-12"></Sidebar>
    <RouterView class="col-lg-9 col-12" />
  </div>
</template>


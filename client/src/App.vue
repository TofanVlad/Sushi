<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />
  <div class="sm:pt-28 pt-24">
    <router-view></router-view>
  </div>
  <Footer />
</template>

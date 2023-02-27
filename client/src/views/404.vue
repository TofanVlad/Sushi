<script setup lang="ts">
import Icon from "../components/ui/Icon.vue";
import Button from "../components/ui/Button.vue";
</script>

<template>
  <section
    class="flex h-full my-auto flex-col items-center justify-center gap-4 py-8 px-4"
  >
    <Icon icon-name="error" class="flex-1" />
    <h4 class="font-bold text-3xl max-w-[400px] text-center">
      Error 404. <br />
      Something went wrong
    </h4>
    <h5 class="max-w-[400px] text-gray-400 text-center">
      The page you are looking for is temporarily unavailable or no longer
      exists
    </h5>
    <router-link to="/">
      <Button color="lime" text="Back to safety" size="lg" text-color="white" />
    </router-link>
  </section>
</template>

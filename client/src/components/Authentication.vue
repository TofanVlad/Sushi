<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";
import Icon from "./ui/Icon.vue";
import useModal from "@/composables/modalBehaviour";
const { openedModal, closeModal } = useModal();

const authActive: Ref<"login" | "register"> = ref("login");
const active = ref(false);
watchEffect(() => {
  active.value = openedModal.value === "human";
});
</script>

<template>
  <section
    class="fixed w-screen h-screen left-0 top-0 bg-black/50 z-10"
    @click.stop="closeModal"
    v-if="active"
  >
    <div
      @click.stop
      class="absolute top-28 right-4 w-full bg-white max-w-[370px] rounded-xl p-4"
    >
      <div class="flex justify-between mb-6">
        <h2 class="font-bold text-2xl">Authentication</h2>
        <div
          class="rounded-lg bg-gray-100 p-2 cursor-pointer"
          @click.stop="closeModal"
        >
          <Icon icon-name="cross" />
        </div>
      </div>
      <p class="text-gray-500 text-light mt-2">Enter your email</p>
      <input
        class="bg-gray-200 focus:outline-orange-500 outline-none transition-all rounded-xl px-4 py-2 mb-2 mt-1 w-full"
        type="email"
        placeholder="Email..."
      />
      <button
        class="w-full bg-green-500 text-white rounded-xl py-4 px-6 my-2"
        @click.stop="closeModal"
      >
        Login with Email
      </button>
      <p class="text-center text-gray-500 font-light my-2">or</p>
      <p class="text-center w-full">
        Create a new account.
        <span
          class="text-orange-500 font-semibold cursor-pointer hover:underline transition-all"
          >Register</span
        >
      </p>
    </div>
  </section>
</template>

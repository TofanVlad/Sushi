<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";
import Icon from "./ui/Icon.vue";
import NavModal from "./ui/NavModal.vue";
import useModal from "@/composables/modalBehaviour";
import useUserStore from "@/store/userStore";
const store = useUserStore();
const { openedModal, closeModal } = useModal();

const authActive: Ref<"login" | "register"> = ref("login");
const active = ref(false);

const authValues = ref({
  username: "",
  password: "",
});

watchEffect(() => {
  active.value = openedModal.value === "human";
});
</script>

<template>
  <NavModal name="human">
    <div class="p-4">
      <div class="flex justify-between mb-6">
        <h2 class="font-bold text-2xl">Authentication</h2>
        <div
          class="rounded-lg bg-gray-100 hover:bg-gray-200 transition-all p-2 cursor-pointer"
          @click.stop="closeModal"
        >
          <Icon icon-name="cross" />
        </div>
      </div>
      <p class="text-gray-500 text-light mt-2">Enter your username</p>
      <input
        class="bg-gray-200 focus:outline-orange-500 outline-none transition-all rounded-xl px-4 py-2 mb-2 mt-1 w-full"
        type="text"
        placeholder="Username..."
        v-model="authValues.username"
      />
      <input
        class="bg-gray-200 focus:outline-orange-500 outline-none transition-all rounded-xl px-4 py-2 mb-2 mt-1 w-full"
        type="password"
        placeholder="Password..."
        v-model="authValues.password"
      />
      <button
        class="w-full bg-green-500 hover:bg-green-600 transition-all text-white rounded-xl py-4 px-6 my-2"
        @click.stop="
          closeModal();
          store.login(authValues);
        "
      >
        Log In into your account
      </button>
      <p class="text-center text-gray-500 font-light my-2">or</p>
      <p class="text-center w-full">
        Create a new account.
        <router-link
          to="/Register"
          class="text-orange-500 font-semibold cursor-pointer hover:underline transition-all"
          @click="closeModal()"
          >Register</router-link
        >
      </p>
    </div>
  </NavModal>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import useUserStore from "@/store/userStore";

const store = useUserStore();

const registerData = reactive({
  username: "",
  email: "",
  phone: "",
  password: "",
});

const rules = {
  username: { required },
  email: { required, email },
  phone: { required },
  password: { required },
};
const v$ = useVuelidate(rules, registerData);

const register = async () => {
  if (await v$.value.$validate()) {
    await store.register(registerData);
    await store.login(registerData);
  }
};
</script>

<template>
  <section class="w-full flex items-center justify-center py-16">
    <div class="p-4 bg-white rounded-lg grid md:grid-cols-2 grid-cols-1 gap-4">
      <h1 class="text-3xl font-semibold text-center md:col-span-2 mb-8">
        Register
      </h1>
      <div class="flex flex-col gap-1">
        <label class="text-gray-500 text-lg">Username </label>
        <input
          type="text"
          placeholder="Username"
          class="rounded-lg px-4 py-2 text-lg outline-gray-600 outline-1 outline transition-all"
          v-model="registerData.username"
        />
        <span class="text-red-400" v-if="v$.username.$errors.length > 0">{{
          v$.username.$errors[0].$message
        }}</span>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-gray-500 text-lg">Email </label>
        <input
          type="email"
          placeholder="Email"
          class="rounded-lg px-4 py-2 text-lg outline-gray-600 outline-1 outline transition-all"
          v-model="registerData.email"
        />
        <span class="text-red-400" v-if="v$.email.$errors.length > 0">{{
          v$.email.$errors[0].$message
        }}</span>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-gray-500 text-lg">Phone number </label>
        <input
          type="number"
          placeholder="Phone number"
          class="rounded-lg px-4 py-2 text-lg outline-gray-600 outline-1 outline transition-all"
          v-model="registerData.phone"
        />
        <span class="text-red-400" v-if="v$.phone.$errors.length > 0">{{
          v$.phone.$errors[0].$message
        }}</span>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-gray-500 text-lg">Password </label>
        <input
          type="password"
          placeholder="Password"
          class="rounded-lg px-4 py-2 text-lg outline-gray-600 outline-1 outline transition-all"
          v-model="registerData.password"
        />
        <span class="text-red-400" v-if="v$.password.$errors.length > 0">{{
          v$.password.$errors[0].$message
        }}</span>
      </div>
      <router-link
        to="/"
        class="md:col-span-2 bg-green-500 hover:bg-green-600 text-white py-2 px-12 rounded-lg text-xl w-max mx-auto cursor-pointer"
        @click="register"
      >
        Create account
      </router-link>
    </div>
  </section>
</template>

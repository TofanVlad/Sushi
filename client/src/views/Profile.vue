<script setup lang="ts">
import Icon from "@/components/ui/Icon.vue";
import ProfileMenuLine from "@/components/ui/Profile/ProfileMenuLine.vue";
import ProfileSection from "@/components/ui/Profile/ProfileSection.vue";
import CategoriesMini from "@/components/CategoriesMini.vue";
import {
  profileMenuLines,
  selectedProfileMenuLine,
  categories,
} from "@/constants";
import useUserStore from "@/store/userStore";
const store = useUserStore();
defineProps<{ id: string }>();
</script>

<template>
  <main
    class="2xl:mx-auto lg:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1 overflow-hidden mb-12"
  >
    <div class="flex items-center gap-4 md:mt-4 mt-2 mb-4">
      <router-link
        to="/"
        class="flex items-center text-green-400 bg-white rounded-xl px-4 py-2 hover:bg-gray-200 gap-2"
      >
        <Icon icon-name="arrowLeft" class="fill-green-400"></Icon>
        Back
      </router-link>
      <div class="flex gap-1">
        <Icon icon-name="house" />
        <Icon icon-name="arrowRight" class="fill-gray-400" />
        <h4 class="capitalize text-gray-400">Profile page</h4>
      </div>
    </div>
    <div class="flex md:flex-row flex-col 2xl:gap-16 xl:gap-12 lg:gap-8 gap-6">
      <section
        class="md:max-w-[250px] max-w-[500px] w-full md:mx-0 mx-auto flex flex-col gap-3"
      >
        <div
          class="flex md:flex-col flex-row gap-3 md:order-1 order-2 p-2 md:bg-transparent bg-white rounded-xl"
        >
          <ProfileMenuLine
            v-for="(text, icon, index) in profileMenuLines"
            :icon="icon"
            :text="text"
            :active="selectedProfileMenuLine === icon"
            :index="index"
          />
        </div>
        <div class="bg-white rounded-xl p-4 flex gap-3 md:order-2 order-1">
          <div class="max-w-[55px] max-h-[55px] min-w-[55px]">
            <img
              src="@/assets/images/ProfilePicture.png"
              alt="Profile Picture"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="w-full flex flex-col justify-between overflow-hidden gap-1"
          >
            <div class="flex justify-between items-center">
              <p class="whitespace-nowrap overflow-hidden text-ellipsis">
                {{ store.$state.username }}
              </p>
              <div
                class="p-1 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <Icon icon-name="pencil" />
              </div>
            </div>
            <p
              class="text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {{ store.$state.email }}
            </p>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">
              {{ store.$state.phone }}
            </p>
          </div>
        </div>
      </section>
      <ProfileSection :section="selectedProfileMenuLine" />
      <section class="md:hidden grid grid-cols-2 gap-4">
        <CategoriesMini
          v-for="(item, index) in categories"
          :key="index"
          :icon="item"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import NavModal from "./ui/NavModal.vue";
import useModal from "../composables/modalBehaviour";
import Accordeon from "./ui/Accordeon.vue";
import useAccordeon from "../composables/accordeonBehaviour";
const { closeModal } = useModal();
const { closeAccordeon } = useAccordeon();
</script>
<template>
  <NavModal name="bell">
    <div class="flex justify-between px-4 pt-4">
      <h2 class="font-bold text-3xl">Notifications</h2>
      <div
        class="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer"
        @click="
          closeModal();
          closeAccordeon();
        "
      >
        <Icon icon-name="cross" />
      </div>
    </div>
    <section
      class="p-4 flex flex-col gap-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl"
    >
      <Accordeon v-for="item in 5" :key="item" :id="`${item}`">
        <template #minimized>
          <h4 class="font-semibold max-h-[58px] clamp">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            recusandae earum inventore in, dolorum dignissimos nobis dolor
            itaque quos facere ab rerum quo nisi! Fugiat commodi aspernatur,
            voluptatibus corporis totam temporibus. Nobis maiores minus
            reiciendis? Dolore quasi sed obcaecati blanditiis expedita
            recusandae, incidunt accusantium repudiandae! Tenetur, dignissimos.
            Necessitatibus, eos soluta.
          </h4>
        </template>
        <template #opened>
          <h4 class="font-semibold overflow-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            recusandae earum inventore in, dolorum dignissimos nobis dolor
            itaque quos facere ab rerum quo nisi! Fugiat commodi aspernatur,
            voluptatibus corporis totam temporibus. Nobis maiores minus
            reiciendis? Dolore quasi sed obcaecati blanditiis expedita
            recusandae, incidunt accusantium repudiandae! Tenetur, dignissimos.
            Necessitatibus, eos soluta.
          </h4>
        </template>
      </Accordeon>
    </section>
  </NavModal>
</template>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { TModals } from "../../composables/modalBehaviour";
import useModal from "../../composables/modalBehaviour";
import useAccordeon from "../../composables/accordeonBehaviour";
const { openedModal, closeModal } = useModal();
const { closeAccordeon } = useAccordeon();

const props = defineProps<{ name: TModals }>();
const active = ref(false);

watchEffect(() => {
  active.value = openedModal.value === props.name;
});
</script>

<template>
  <section
    class="fixed w-screen h-screen z-20 top-0 left-0 bg-black/50"
    @click.stop="
      closeModal();
      closeAccordeon();
    "
    v-if="active"
  >
    <div
      class="bg-white absolute top-28 xl:left-1/2 lg:left-[40%] md:left-1/4 sm:left-[20%] sm:right-auto right-2 left-2 rounded-xl lg:w-[590px] md:w-[540px] sm:w-[490px] flex flex-col gap-4 z-40 overflow-hidden sm:max-h-[550px] max-h-[calc(100vh-120px)]"
      @click.stop
    >
      <slot> </slot>
    </div>
  </section>
</template>

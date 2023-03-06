import { ref, Ref } from "vue";

export const openedAccordeon: Ref<string | null> = ref(null);

const useAccordeon = () => {
  function openAccordeon(modalName: string) {
    openedAccordeon.value = modalName;
  }
  function closeAccordeon() {
    openedAccordeon.value = null;
  }

  return {
    openedAccordeon,
    openAccordeon,
    closeAccordeon,
  };
};

export default useAccordeon;

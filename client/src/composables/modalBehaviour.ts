import { ref, Ref } from "vue";

export const openedModal: Ref<TModals | null> = ref(null);
export type TModals =
  | "bell"
  | "cart"
  | "filter"
  | "human"
  | "heart"
  | "burgher";

const useModal = () => {
  function openModal(modalName: TModals) {
    openedModal.value = modalName;
    document.body.style.overflowY = "hidden";
  }
  function closeModal() {
    openedModal.value = null;
    document.body.style.overflowY = "auto";
  }

  return {
    openedModal,
    openModal,
    closeModal,
  };
};

export default useModal;

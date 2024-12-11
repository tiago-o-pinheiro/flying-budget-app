import { ModalStore, useModalStore } from "../../stores";

export const useModalProvider = () => {
  const closeModal = useModalStore((state: ModalStore) => state.closeModal);
  const modal = useModalStore((state: ModalStore) => state.modal);
  const setModal = useModalStore((state: ModalStore) => state.setModal);

  return {
    modal,
    closeModal,
    setModal,
  };
};

import { create } from "zustand";

export interface ModalStore {
  modal: string;
  setModal: (modal: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
  modal: "",
  setModal: (modal: string) => set({ modal }),
  closeModal: () => set({ modal: "none" }),
}));

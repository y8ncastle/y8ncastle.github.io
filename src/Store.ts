import { ModalDataProps } from "interfaces/common/modal";
import { create } from "zustand";

interface StoreInterface {
  // key: valueType [unit, interface];
  // setKey: (unitKey: unitValueType) => void;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  currentModal: string | null;
  isModalOpen: boolean;
  setCurrentModal: (modal: string, isOpen: boolean) => void;
  modalData: ModalDataProps | null;
  setModalData: (data: ModalDataProps) => void;
}

const useGlobalStore = create<StoreInterface>((set) => {
  return {
    // key: initialValue,
    // setKey: (unitKey: unitValueType) => set({ unitKey });
    currentLang: "ko",
    setCurrentLang: (lang: string) => set({ currentLang: lang }),
    currentModal: null,
    isModalOpen: false,
    setCurrentModal: (modal: string, isOpen: boolean) =>
      set({ currentModal: modal, isModalOpen: isOpen }),
    modalData: null,
    setModalData: (data: ModalDataProps) => set({ modalData: data }),
  };
});

export default useGlobalStore;

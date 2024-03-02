import { create } from "zustand";

interface StoreInterface {
  // key: valueType [unit, interface];
  // setKey: (unitKey: unitValueType) => void;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

const useGlobalStore = create<StoreInterface>((set) => {
  return {
    // key: initialValue,
    // setKey: (unitKey: unitValueType) => set({ unitKey });
    currentLang: "ko",
    setCurrentLang: (lang: string) => set({ currentLang: lang }),
  };
});

export default useGlobalStore;

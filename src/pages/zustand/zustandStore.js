import { create } from "zustand";
const zustandStore = {
  useCounterStore: create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
  })),

  useColorChangeStore: create((set) => ({
    objColor: "black",
    changeRed: () =>
      set((state) =>
        state.objColor === "black" ? { objColor: "red" } : { objColor: "black" }
      ),
  })),
};

export default zustandStore;

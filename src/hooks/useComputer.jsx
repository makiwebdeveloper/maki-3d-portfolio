import { create } from "zustand";

export const useComputer = create((set) => ({
  activeFolders: [],
  addActiveFolder: (value) =>
    set((state) => ({
      activeFolders: [...state.activeFolders, value],
    })),
  removeActiveFolder: (value) =>
    set((state) => ({
      activeFolders: state.activeFolders.filter((i) => i !== value),
    })),
  toggleActiveFolder: (value) =>
    set((state) => {
      if (state.activeFolders.find((i) => i === value)) {
        return {
          activeFolders: state.activeFolders.filter((i) => i !== value),
        };
      } else {
        return {
          activeFolders: [...state.activeFolders, value],
        };
      }
    }),
}));

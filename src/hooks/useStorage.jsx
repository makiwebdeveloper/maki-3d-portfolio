import { create } from "zustand";

export const useStorage = create((set) => ({
  light: false,
  toggleLight: () =>
    set((state) => ({
      light: !state.light,
    })),

  activeSection: 1,
  setActiveSection: (activeSection) =>
    set({
      activeSection,
    }),

  navigationAnchor: null,
  setNavigationAnchor: (navigationAnchor) => set({ navigationAnchor }),

  selectedSkill: null,
  setSelectedSkill: (selectedSkill) => set({ selectedSkill }),
}));

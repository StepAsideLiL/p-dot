import { create } from "zustand";

type DialogStore = {
  open: boolean;
  setOpen: (value: boolean) => void;
  setOpenTrue: () => void;
  setOpenFalse: () => void;
  toggleOpen: () => void;
};

export const useDialogStore = create<DialogStore>((set) => ({
  open: false,
  setOpen: (value) => set(() => ({ open: value })),
  setOpenTrue: () => set(() => ({ open: true })),
  setOpenFalse: () => set(() => ({ open: false })),
  toggleOpen: () => set((s) => ({ open: !s.open })),
}));

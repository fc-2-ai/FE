import { create } from 'zustand';

interface DialogState {
  isOpen: boolean;
  isConfirm: boolean;
  desc: string;
  onConfirm: () => void;
  onCancel: () => void;

  /* eslint-disable no-unused-vars */
  openAlert: (desc: string) => void;
  openConfirm: (desc: string) => Promise<boolean>;
  closeDialog: () => void;
}

const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  isConfirm: false,
  desc: '',
  onConfirm: () => {},
  onCancel: () => {},

  openAlert: (desc: string) => {
    set({ isOpen: true, isConfirm: false, desc: desc });
  },

  openConfirm: (desc: string) => {
    return new Promise((resolve) => {
      set({
        isOpen: true,
        isConfirm: true,
        desc: desc,
        onConfirm: () => {
          resolve(true);
          set({ isOpen: false });
        },
        onCancel: () => {
          resolve(false);
          set({ isOpen: false });
        },
      });
    });
  },

  closeDialog: () =>
    set({ isOpen: false, desc: '', onConfirm: () => {}, onCancel: () => {} }),
}));

export default useDialogStore;

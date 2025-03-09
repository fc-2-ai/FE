import { create } from 'zustand';
import React from 'react';

interface DialogState {
  isOpen: boolean;
  isConfirm: boolean;
  desc: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;

  /* eslint-disable no-unused-vars */
  openAlert: (desc: React.ReactNode) => void;
  openConfirm: (desc: React.ReactNode) => Promise<boolean>;
  closeDialog: () => void;
}

const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  isConfirm: false,
  desc: '',
  onConfirm: () => {},
  onCancel: () => {},

  openAlert: (desc: React.ReactNode) => {
    set({ isOpen: true, isConfirm: false, desc: desc });
  },

  openConfirm: (desc: React.ReactNode) => {
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

import useDialogStore from '@/store/useDialogStore';
import React from 'react';

export const useDialog = () => {
  const openAlert = useDialogStore((state) => state.openAlert);
  const openConfirm = useDialogStore((state) => state.openConfirm);

  const alert = (desc: React.ReactNode) => {
    openAlert(desc);
  };

  const confirm = async (desc: React.ReactNode) => {
    return await openConfirm(desc);
  };

  return { alert, confirm };
};

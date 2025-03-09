import useDialogStore from '@/store/useDialogStore';

export const useDialog = () => {
  const openAlert = useDialogStore((state) => state.openAlert);
  const openConfirm = useDialogStore((state) => state.openConfirm);

  const alert = (desc: string) => {
    openAlert(desc);
  };

  const confirm = async (desc: string) => {
    return await openConfirm(desc);
  };

  return { alert, confirm };
};

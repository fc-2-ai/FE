import useDialogStore from '@/store/useDialogStore';

export const useDialog = () => {
  const openAlert = useDialogStore((state) => state.openAlert);
  const openConfirm = useDialogStore((state) => state.openConfirm);

  const alert = (message: string) => {
    openAlert(message);
  };

  const confirm = async (message: string) => {
    return await openConfirm(message);
  };

  return { alert, confirm };
};

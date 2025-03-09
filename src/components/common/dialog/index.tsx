import React from 'react';
import useDialogStore from '@/store/useDialogStore';
import styled from 'styled-components';

const Dialog: React.FC = () => {
  const {
    isOpen,
    desc,
    onConfirm = () => {},
    onCancel = () => {},
    isConfirm,
  } = useDialogStore();

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <S.DialogBackDrop>
      <S.DialogContainer>
        <S.DialogDesc>{desc}</S.DialogDesc>
        <S.DialogBtnWrap>
          {isConfirm ? (
            <S.DialogBtn onClick={handleCancel}>취소</S.DialogBtn>
          ) : null}
          <S.DialogBtn
            $btnType={'confirm'}
            onClick={handleConfirm}>
            확인
          </S.DialogBtn>
        </S.DialogBtnWrap>
      </S.DialogContainer>
    </S.DialogBackDrop>
  );
};

export default Dialog;

const S = {
  DialogBackDrop: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  `,

  DialogContainer: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.medium};
  `,

  DialogDesc: styled.div`
    min-height: 30px;
    margin-top: 10px;
    text-align: center;
  `,

  DialogBtnWrap: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  `,

  DialogBtn: styled.button<{ $btnType?: string }>`
    flex-grow: 1;
    padding: 8px 0;

    background: ${({ $btnType, theme }) =>
      $btnType === 'confirm' ? theme.colors.primary : theme.colors.lightGray1};
    border-radius: ${({ theme }) => theme.radius.xsmall};
    color: ${({ $btnType, theme }) =>
      $btnType === 'confirm' ? theme.colors.white : theme.colors.text};
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  `,
};

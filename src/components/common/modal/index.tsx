import theme from '@/styles/theme';
import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';

const Modal = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef<HTMLDivElement>(null);

  return (
    <>
      <S.ModalOpenBtn onClick={() => setModalOpen(true)}>열기</S.ModalOpenBtn>

      {modalOpen && (
        <S.ModalContainer
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}>
          <S.ModalContent>
            {children}
            <S.BtnWrapper>
              <S.ModalCloseBtn onClick={() => setModalOpen(false)}>
                닫기
              </S.ModalCloseBtn>
            </S.BtnWrapper>
          </S.ModalContent>
        </S.ModalContainer>
      )}
    </>
  );
};

export default Modal;

const S = {
  BtnWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  ModalCloseBtn: styled.button`
    cursor: pointer;
  `,
  ModalOpenBtn: styled.button`
    cursor: pointer;
  `,
  ModalContainer: styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  `,
  ModalContent: styled.div`
    background-color: ${theme.colors.white};
    max-width: 70%;
    max-height: 70%;
    align-content: center;
    padding: 15px;
  `,
};

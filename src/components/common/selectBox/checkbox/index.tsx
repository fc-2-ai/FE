import React from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';
type CheckboxType = {
  select: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent) => void;
};

const Checkbox = ({ select, children, onChange, onClick }: CheckboxType) => {
  return (
    <S.CheckboxContainer>
      <input
        type="checkbox"
        value={select}
        id={select}
        name={select}
        onChange={onChange}
      />
      <label
        htmlFor={select}
        onClick={onClick}>
        {children}
      </label>
    </S.CheckboxContainer>
  );
};

const S = {
  CheckboxContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: ${theme.fontSizes.fz20};
    width: auto;
    min-height: 2vh;
    gap: 0.2vw;

    label {
      white-space: nowrap;
      cursor: pointer;
    }
  `,
};

export default Checkbox;

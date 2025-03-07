import theme from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

type RadioType = {
  select: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Radio = ({ select, children, onChange }: RadioType) => {
  return (
    <S.RadioContainer>
      <input
        type="radio"
        value={select}
        id={select}
        name="fruit"
        onChange={onChange}
      />
      <label htmlFor={select}>{children}</label>
    </S.RadioContainer>
  );
};

const S = {
  RadioContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: ${theme.fontSizes.fz20};
    width: 6%;
    height: 2vh;
    gap: 5%;
  `,
};
export default Radio;

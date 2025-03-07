import React from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';
import { Link } from '@tanstack/react-router';

type ButtonType = {
  type?: 'login' | 'create' | 'finish';
  width?: string;
  height?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const ROUTER_PATH = {
  login: '/dashboard',
  create: '/my-project',
  finish: '/auth/login/',
};
const Button = ({ type, width, height, children, onClick }: ButtonType) => {
  const pathLink = type ? ROUTER_PATH[type] : '/';

  let message: React.ReactNode = '';

  switch (type) {
    case 'login':
      message = '로그인';
      break;
    case 'create':
      message = '十 새 프로젝트';
      break;
    case 'finish':
      message = '로그인하러 가기';
      break;
    default:
      message = children;
      break;
  }

  return (
    <Link to={pathLink}>
      <S.ButtonContainer
        type={type}
        width={width}
        height={height}
        onClick={onClick}>
        <p>{message}</p>
      </S.ButtonContainer>
    </Link>
  );
};

const S = {
  ButtonContainer: styled.div<ButtonType>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width, type }) =>
      width || (type === 'login' || type === 'finish' ? '20%' : '10vw')};
    height: ${({ height, type }) =>
      height || (type === 'login' || type === 'finish' ? '6vh' : '7vh')};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.radius.large};
    font-size: ${theme.fontSizes.fz18};
    font-weight: ${theme.fontWeights.bold};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondary2};
    }

    p {
      color: ${theme.colors.white};
    }
  `,
};

export default Button;

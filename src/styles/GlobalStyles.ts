import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyles = createGlobalStyle`
    ${reset}


// 추가 전역 스타일 작성

    a {
    text-decoration: none;
    color: inherit;
    }

    body,html {
    font-family: "NexonLv2", "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.fz58};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.regular}
    }

`;

export default GlobalStyles;

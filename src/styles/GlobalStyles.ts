import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
// 추가 전역 스타일 작성

    a {
    text-decoration: none;
    color: inherit;
    }

`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        background-color: #C4D7E0;
    }
    button {
        border: none;
    }
`;
export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import Variables from "./variables";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${Fonts};
    ${Variables};
    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    

    /* STYLES FOR THE BACKGROUND ANIMATION ;*/
    body {
        background: linear-gradient(-45deg, #18202c, #0d1624, #18202c, #0d1624);
        /* background: linear-gradient(-45deg, rgb(30, 43, 59), #0D1624, rgb(34, 48, 68), #0D1624); */
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        font-family: var(--font-stack);
        line-height: 1.5;
        font-size: 18px;
        color: #fafafa;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .title {
        color: var(--outstanding-text);
        font-weight: 500;
        font-size: 2.66rem;
    }    
    a:hover {
        text-decoration: underline;
    }
`;

export default GlobalStyle;

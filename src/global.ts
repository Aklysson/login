import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --white: #ffffff;

    --gray-50: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-800: #29292e;
    --gray-900: #121214;

    --cyan-500: #61dafd;
    --yellow-500: #EBA417;
}

body {
    background-color: var(--gray-900);
    color: var(--white);
}` 
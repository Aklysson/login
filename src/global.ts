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
    
}

*{
    margin: 0;
    padding: 0;
    font-family:'Nunito', sans-serif;
}


.content{
    margin: 0 auto;
    max-width: 720px;
}

.modal{
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 50% auto;
    height: 50%;
    color: black;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20vh;
    background-color: #ffffff;
    border-radius: 10px;

    input{
        width: 40%;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
    }
    button{
        width: 45%;
        border-radius: 10px;
        height: 30px;
        background-color: #121214;
        color: #ffffff;
        :hover{
            cursor: pointer;
        }
    }

    

}

` 


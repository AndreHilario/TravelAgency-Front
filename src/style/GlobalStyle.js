import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lexend Deca';
        font-style: normal;
        background-color: #fff;
    }
    button {
        width: 182px;
        height: 60px;
        background-color: #0FFFEF;
        border: 1px solid #5D9040;
        border-radius: 12px;
        font-weight: 700;
        font-size: 19px;
        line-height: 18px;
        color: #000000;
        cursor: pointer;
    }
    a {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        padding-top: 30px;
    }
    :disabled {
        background-color: lightblue;
    }
    h2 {
        font-size: 40px;
        font-style: oblique;
        margin-top: 40px;
        margin-left: 40px;
    }
    span {
        color: blueviolet;
        font-weight: bold;
    }
`

export default GlobalStyle;

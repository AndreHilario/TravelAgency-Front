import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lexend Deca';
        font-style: normal;
    }
    button {
        width: 182px;
        height: 60px;
        background-color: #00BFFF;
        border: 1px solid #fff;
        border-radius: 120px;
        font-weight: 700;
        font-size: 25px;
        line-height: 18px;
        color: #000000;
        cursor: pointer;
    }
    button:hover {
        width: 185px;
        height: 63px;
        background-color: aquamarine;
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
        color: #000080;
        font-weight: bold;
    }
`

export default GlobalStyle;

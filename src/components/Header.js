import styled from "styled-components"

export default function Header() {

    return (
        <HeaderContainer>
            Viagens Alucinantes
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    height: 100px;
    width: 100%;
    font-size: 44px;
    font-style: italic;
`;
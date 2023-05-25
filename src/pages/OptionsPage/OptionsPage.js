import styled from "styled-components"
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function OptionsPage() {

    return (
        <OptionsPageContainer>
            <Header />
            <ButtonsContainer>
                <Link to={"/flights"}>
                    <button>Veja as passagens disponíveis</button>
                </Link>
                <Link to={"/hosting"}>
                    <button>Veja as hospedagens disponíveis</button>
                </Link>
            </ButtonsContainer>

        </OptionsPageContainer>
    )
}

export const OptionsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonsContainer = styled.main`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30vh;
`;
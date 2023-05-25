import styled from "styled-components"
import MenuFlightsPage from "./MenuFlightsPage";
import Header from "../../components/Header";

export default function FlightsPage() {

    return (

        <FlightsPageContainer>
            <Header />
            <MenuFlightsPage />
        </FlightsPageContainer>
    )
}

const FlightsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    background-image: url("https://img.freepik.com/vetores-gratis/plano-de-fundo-de-viagens-de-design_23-2149193475.jpg");
    background-size: cover;
    background-position: center;
`;
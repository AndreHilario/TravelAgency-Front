import styled from "styled-components"
import MenuFlightsPage from "./MenuFlightsPage";
import Header from "../../components/Header";
import { useState } from "react";

export default function FlightsPage() {

    const [filterApplied, setFilterApplied] = useState(false);

    return (

        <FlightsPageContainer>
            <Header setFilterApplied={setFilterApplied} filterApplied={filterApplied} />
            <MenuFlightsPage filterApplied={filterApplied} />
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
    padding: 20px;
`;
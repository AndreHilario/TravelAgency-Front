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
`;
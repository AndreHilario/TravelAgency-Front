import styled from "styled-components";
import MenuHomePage from "./MenuHomePage";
import Header from "../../components/Header";

export default function HomePage() {

    return (
        <HomePageContainer>
            <Header />
            <MenuHomePage />
        </HomePageContainer>
    )
}

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
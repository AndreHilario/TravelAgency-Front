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
    min-height: 100vh; 
    background-image: url("https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-maldivas-capa2019-04.jpg");
    background-size: cover;
    background-position: center;
`;
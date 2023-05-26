import styled from "styled-components"
import MenuHostingPage from "./MenuHostingPage";
import Header from "../../components/Header";

export default function HostingPage() {

    return (

        <HostingPageContainer>
            <Header />
            <MenuHostingPage />
        </HostingPageContainer>
    )
}

const HostingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    background-image: url("https://gorafa.com.br/wp-content/uploads/2020/09/shutterstock_118965868-1.jpg");
    background-size: cover;
    background-position: center;
    padding: 20px;
`;
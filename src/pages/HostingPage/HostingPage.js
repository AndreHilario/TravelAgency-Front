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
`;
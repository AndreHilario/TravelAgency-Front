import styled from "styled-components"
import Header from "../../components/Header";
import DescriptionHostingMenu from "./DescriptionHostingMenu";

export default function DescriptionHostingPage() {

    return (

        <DescriptionHostingPageContainer>
            <Header />
            <DescriptionHostingMenu />
        </DescriptionHostingPageContainer>
    )
}

const DescriptionHostingPageContainer = styled.div`
    padding: 20px;
    min-height: 100vh;
`;
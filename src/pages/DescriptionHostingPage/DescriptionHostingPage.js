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
    background-color: lightgray;
    height: 100vh;
    padding: 20px;
    background-color: #fff;
    height: 100vh;
`;
import styled from "styled-components";
import Header from "../../components/Header";
import DescriptionMenu from "./DescriptionMenu";

export default function DescriptionFlightPage() {

    return (

        <DescriptionFlightPageContainer>
            <Header />
            <DescriptionMenu />
        </DescriptionFlightPageContainer>
    )
}

const DescriptionFlightPageContainer = styled.div`

`;
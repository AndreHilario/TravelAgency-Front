import styled from "styled-components"
import MenuHostingPage from "./MenuHostingPage";
import Header from "../../components/Header";
import { useState } from "react";

export default function HostingPage() {

    const [hotelFilter, setHotelFilter] = useState(false)

    return (

        <HostingPageContainer>
            <Header setHotelFilter={setHotelFilter} />
            <MenuHostingPage hotelFilter={hotelFilter} />
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
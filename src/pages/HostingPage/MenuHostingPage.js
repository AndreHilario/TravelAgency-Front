import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";

export default function MenuHostingPage() {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const { selectedCity } = useContext(CityContext);

    useEffect(() => {
        if (selectedCity) {
            apiAuth
                .getHotels(selectedCity)
                .then(res => {
                    setHotels(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    alert(err.response.data);
                });
        }
    }, [selectedCity]);

    if (loading) {
        return <Loading></Loading>; // Exibir indicador de carregamento enquanto a cidade está sendo carregada
    }

    return (
        <MenuHostingPageContainer>
            <h2>Passagens disponíveis para: <span>{selectedCity}</span></h2>
            <HotelContent>
                {hotels.map((row) =>
                    <RowHotels key={row.id}>
                        <RowHotelImg>
                            <img src={row.hotel_images[0]} alt="Hotel" />
                        </RowHotelImg>
                        <p>{row.hotel_name}</p>
                        <p>{row.daily_price}</p>
                    </RowHotels>
                )}
            </HotelContent>
        </MenuHostingPageContainer>
    );
};



const MenuHostingPageContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

const HotelContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
`;

const RowHotels = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowHotelImg = styled.div`
    display: flex;
    img {
        width: 370px;
        height: auto;
    }
`;

const Loading = styled.div` 
    width: 50px;
    height: 50px;
    border: 10px solid #eee;
    border-bottom-color: rebeccapurple;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
    margin-top: 2rem;
`;


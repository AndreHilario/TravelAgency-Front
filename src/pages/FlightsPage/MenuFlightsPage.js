import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";

export default function MenuFlightsPage() {

    const [flightsCity, setFlightsCity] = useState([]);

    const { selectedCity } = useContext(CityContext);

    useEffect(() => {

        apiAuth
            .getFlights(selectedCity)
            .then(res => setFlightsCity(res.data))
            .catch(err => alert(err.response.data))

    }, [selectedCity, flightsCity]);

    return (
        <MenuFlightsPageContainer>
            <h2>Passagens disponíveis para: <span>{selectedCity}</span></h2>
            <FlightContent>
                {flightsCity.map((row) =>
                    <RowItem>
                        <RowImg>
                            <img src="https://media.istockphoto.com/id/155439315/pt/foto/passageiros-de-avi%C3%A3o-a-voar-acima-de-nuvens-durante-o-p%C3%B4r-do-sol.jpg?s=612x612&w=0&k=20&c=tMGbesGfrpt7G_HUtEjkJQVWWLiBJwK3kZkd4QpfGOQ=" alt="Imagem de avião" />
                        </RowImg>
                        <p>{row.price}</p>
                        <p>{row.departure_city}</p>
                        <p>{row.flight_date}</p>
                        <p>{row.flight_time}</p>
                    </RowItem>
                )}
            </FlightContent>
        </MenuFlightsPageContainer>
    )
}

const MenuFlightsPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h2 {
        font-size: 40px;
        font-style: oblique;
        margin-top: 40px;
        margin-left: 40px;
    }
    span {
        color: blueviolet;
        font-weight: bold;
    }
`;
const FlightContent = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 35px;
`;

const RowItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 2px solid blueviolet;
`;

const RowImg = styled.div`
    display: flex;
    img {
        width: 370px;
        height: auto;
    }
`;
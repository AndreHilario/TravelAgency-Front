import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";

export default function MenuFlightsPage() {

    const [flightsCity, setFlightsCity] = useState([]);
    const [loading, setLoading] = useState(true);

    const { selectedCity } = useContext(CityContext);

    useEffect(() => {

        if (selectedCity) {
            apiAuth
                .getFlights(selectedCity)
                .then(res => {
                    setFlightsCity(res.data);
                    setLoading(false); // Define o estado de loading como false quando a chamada é concluída com sucesso
                })
                .catch(err => {
                    setLoading(false); // Define o estado de loading como false em caso de erro
                    alert(err.response.data);
                });
        }
    }, [selectedCity]);

    if (loading) {
        return <Loading></Loading>; // Exibe indicador de carregamento enquanto os voos estão sendo carregados
    }

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
    );
}


const MenuFlightsPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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

const Loading = styled.div` 
    width: 50px;
    height: 50px;
    border: 10px solid #eee;
    border-bottom-color: rebeccapurple;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
    margin-top: 2rem;
`;
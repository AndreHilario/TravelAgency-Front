import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";

export default function MenuFlightsPage({ filterApplied }) {
    
    const [flightsCity, setFlightsCity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { selectedCity } = useContext(CityContext);
    const { minPrice, maxPrice } = useContext(FilterContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedCity && !filterApplied) {
            setLoading(true);
            setError(null);

            apiAuth
                .getFlights(selectedCity)
                .then((res) => {
                    setFlightsCity(res.data);
                })
                .catch((err) => {
                    setError("Ocorreu um erro ao carregar os voos. Por favor, tente novamente mais tarde.");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else if (filterApplied) {
            if (minPrice > maxPrice) {
                setError("O preço mínimo deve ser menor que o preço máximo");
                setFlightsCity([]); // Limpa os voos filtrados
                setLoading(false);
            } else {
                setLoading(true);
                setError(null);

                apiAuth
                    .filterFlightsByPrice(selectedCity, minPrice, maxPrice)
                    .then((res) => {
                        setFlightsCity(res.data);
                    })
                    .catch((err) => {
                        setError("Ocorreu um erro ao filtrar os voos. Por favor, tente novamente mais tarde.");
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }
    }, [selectedCity, filterApplied, minPrice, maxPrice]);

    const handleDetails = (id) => navigate(`/flights/${id}`);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <MenuFlightsPageContainer>
            {error && <div>{error}</div>}

            <h2>Passagens disponíveis para: <span>{selectedCity}</span></h2>
            <FlightContent>
                {flightsCity.map((row) => (
                    <RowItem key={row.id} onClick={() => handleDetails(row.id)}>
                        <FlightImage src="https://media.istockphoto.com/id/155439315/pt/foto/passageiros-de-avi%C3%A3o-a-voar-acima-de-nuvens-durante-o-p%C3%B4r-do-sol.jpg?s=612x612&w=0&k=20&c=tMGbesGfrpt7G_HUtEjkJQVWWLiBJwK3kZkd4QpfGOQ=" alt="Imagem de avião" />
                        <FlightInfo>
                            <FlightPrice>R$ {row.price}</FlightPrice>
                            <FlightDeparture>{row.departure_city}</FlightDeparture>
                            <FlightDate>{row.flight_date}</FlightDate>
                            <FlightTime>{row.flight_time}</FlightTime>
                        </FlightInfo>
                    </RowItem>
                ))}
            </FlightContent>
        </MenuFlightsPageContainer>
    );
}

const MenuFlightsPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FlightContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 35px;
    gap: 30px;
`;

const RowItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 16px;  
    border: 2px #5a849f;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const FlightImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 8px;
    border-radius: 8px;
`;

const FlightInfo = styled.div`
    text-align: center;
`;

const FlightPrice = styled.p`
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 4px;
    
`;

const FlightDeparture = styled.p`
    margin-bottom: 4px;
    font-size: 20px;
`;

const FlightDate = styled.p`
    margin-bottom: 4px;
    font-size: 20px;
`;

const FlightTime = styled.p`
    margin-bottom: 4px;
    font-size: 20px;
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

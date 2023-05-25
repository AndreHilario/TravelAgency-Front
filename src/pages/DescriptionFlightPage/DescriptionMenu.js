import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";

export default function DescriptionMenu() {
  const [flightDetails, setFlightDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { selectedCity } = useContext(CityContext);

  useEffect(() => {
    if (selectedCity && id) {
      apiAuth
        .getFlightById(id)
        .then((res) => {
          setFlightDetails(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(err.response.data);
        });
    }
  }, [selectedCity, id]);

  if (loading && !id) {
    return <Loading></Loading>;
  }

  return (
    <DescriptionMenuContainer>
      <h2>Passagem de número {flightDetails.number} para <span>{selectedCity}</span></h2>
      <DescriptionContent>
        <ItemContainer>
          <Item>
            <ItemLabel>Cidade de destino:</ItemLabel>
            <ItemValue>{flightDetails.destination}</ItemValue>
          </Item>
          <Item>
            <ItemLabel>Cidade de origem:</ItemLabel>
            <ItemValue>{flightDetails.departure_city}</ItemValue>
          </Item>
          <Item>
            <ItemLabel>Companhia Aérea:</ItemLabel>
            <ItemValue>{flightDetails.airline_name}</ItemValue>
          </Item>
          <Item>
            <ItemLabel>Horário de partida:</ItemLabel>
            <ItemValue>{flightDetails.departure_time}</ItemValue>
          </Item>
          <Item>
            <ItemLabel>Horário de chegada:</ItemLabel>
            <ItemValue>{flightDetails.arrival_time}</ItemValue>
          </Item>
          <Item>
            <ItemLabel>Valor da passagem:</ItemLabel>
            <ItemValue>R$ {flightDetails.price}</ItemValue>
          </Item>
        </ItemContainer>
      </DescriptionContent>
    </DescriptionMenuContainer>
  );
}

const DescriptionMenuContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  font-size: 25px;
`;

const ItemContainer = styled.ul`
  list-style-type: disc; /* Utiliza marcadores em formato de bolinha */
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ItemLabel = styled.p`
  font-weight: bold;
  margin-right: 1rem;
`;

const ItemValue = styled.p``;

const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #eee;
  border-bottom-color: rebeccapurple;
  border-radius: 50%;
  animation: rotate 1.5s linear infinite;
  margin-top: 2rem;
`;


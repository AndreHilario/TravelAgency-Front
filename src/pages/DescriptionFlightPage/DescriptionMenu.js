import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";

export default function DescriptionMenu() {

  const [flightDetails, setFlightDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { selectedCity } = useContext(CityContext);

  const navigate = useNavigate();

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

  const reserve = () => {

    const data = {
      number: flightDetails.number+1,
      flight_date: flightDetails.flight_date,
      flight_time: flightDetails.flight_time,
      departure_city: flightDetails.departure_city,
      destination: flightDetails.destination,
      airline_name: flightDetails.airline_name,
      departure_time: flightDetails.departure_city,
      arrival_time: flightDetails.arrival_time,
      price: flightDetails.price,
      flight_id: id
    }

    apiAuth
      .salveFlight(data)
      .then(() => {
        alert("Passagem salva com sucesso");
        navigate("/options");
      })
      .catch((err) => alert("Passagem já reservada"))
  }

  if (loading && !id) {
    return <Loading></Loading>;
  }

  return (
    <DescriptionMenuContainer>
      <h2>Passagem de número {flightDetails.number} para <span>{flightDetails.destination}</span></h2>
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
          <BarAndQRcodeContainer>
            {flightDetails.number && (
              <>
                <Barcode value={flightDetails.number.toString()} />
                <QRCode value={flightDetails.number.toString()} size={120} />
              </>
            )}
          </BarAndQRcodeContainer>
        </ItemContainer>
      </DescriptionContent>
      <ButtonContainer>
        <button onClick={reserve}>Reservar passagem</button>
      </ButtonContainer>
    </DescriptionMenuContainer >
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

const BarAndQRcodeContainer = styled.div`
  display: flex;
  gap: 75px;
  margin-top: 70px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 45%;
  bottom: 10%;
`;


import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function OptionsPage() {
    return (
        <OptionsPageContainer>
            <Header />
            <OptionsContent>
                <OptionsTitle>Escolha uma opção:</OptionsTitle>
                <OptionsDescription>Veja as opções disponíveis de passagens e hospedagens para sua viagem.</OptionsDescription>
                <BackgroundImageLink to="/flights">
                    <BackgroundImage src={"https://www.drmarcelobdalio.com.br/imagens/para-sua-saude/trombose-viagem-aviao.jpg"} alt="Background Flights" />
                    <OptionButtonText>Passagens</OptionButtonText>
                </BackgroundImageLink>
                <BackgroundImageLink to="/hosting">
                    <BackgroundImage src={"https://cdn2.revistahoteis.com.br/wp-content/uploads/2021/12/Hotel.jpg"} alt="Background Hosting" />
                    <OptionButtonText>Hospedagens</OptionButtonText>
                </BackgroundImageLink>
            </OptionsContent>
        </OptionsPageContainer>
    );
}

export const OptionsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh; 
    background-image: url("https://www.cpaps.com.br/blog/wp-content/uploads/2020/02/como-usar-cpap-viagem-aviao.jpg");
    background-size: cover;
    background-position: center;
    padding: 20px;
`;

const OptionsContent = styled.div`
    text-align: center;
`;

const OptionsTitle = styled.h2`
    font-size: 50px;
    margin-bottom: 30px;
`;

const OptionsDescription = styled.p`
    font-size: 25px;
    margin-bottom: 30px;
`;

const BackgroundImageLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 300px; 
    margin-bottom: 30px;
    text-decoration: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 4);
    }
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const OptionButtonText = styled.span`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 8px;
`;

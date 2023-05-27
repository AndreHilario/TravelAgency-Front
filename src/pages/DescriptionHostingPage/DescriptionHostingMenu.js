import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { useParams } from "react-router-dom";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";

export default function DescriptionHostingMenu() {

    const [hotelDetails, setHotelDetails] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { id } = useParams();

    const { selectedCity } = useContext(CityContext);

    useEffect(() => {
        if (selectedCity && id) {
            apiAuth
                .getHotelById(id)
                .then((res) => {
                    setHotelDetails(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    alert(err.response.data);
                });
        }
    }, [selectedCity, id]);

    useEffect(() => {
        // Verifica se todas as imagens foram carregadas
        const checkImagesLoaded = () => {
            const images = Array.from(document.querySelectorAll('.carousel-image'));
            for (let i = 0; i < images.length; i++) {
                if (!images[i].complete) {
                    return false;
                }
            }
            return true;
        };

        // Verifica o carregamento das imagens a cada 500ms
        const checkInterval = setInterval(() => {
            if (checkImagesLoaded()) {
                setImagesLoaded(true);
                clearInterval(checkInterval);
            }
        }, 500);

        return () => clearInterval(checkInterval);
    }, [hotelDetails.hotel_images]);


    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? hotelDetails.hotel_images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === hotelDetails.hotel_images.length - 1 ? 0 : prevIndex + 1));
    };


    if (loading && !id) {
        return <Loading></Loading>;
    }
    console.log(hotelDetails.hotel_images[3])
    return (
        <>
            <CarouselContainer>
                <NameContainer>
                    <p>{hotelDetails.hotel_name}</p>
                </NameContainer>
                {imagesLoaded ? (
                    <Carousel>
                        {hotelDetails.hotel_images && hotelDetails.hotel_images.length > 0 ? (
                            hotelDetails.hotel_images.map((image, index) => (
                                <Slide key={index} isActive={index === currentIndex}>
                                    <Image src={image} alt={`Image ${index + 1}`} className="carousel-image" />
                                </Slide>
                            ))
                        ) : (
                            <p>No images available.</p>
                        )}
                    </Carousel>
                ) : (
                    <p>Loading images...</p>
                )}
                <Button onClick={goToPreviousSlide}>Anterior</Button>
                <Button onClick={goToNextSlide}>Próximo</Button>
            </CarouselContainer>
            <DetailsContainer>
                <DetailsTitle>Veja os detalhes</DetailsTitle>
                <Item>Localizado em: <span>{hotelDetails.located_city}</span></Item>
                <Item>Diária: <span>R$ {hotelDetails.daily_price}</span></Item>
                <Item>Descrição: <span>{hotelDetails.description}</span></Item>
            </DetailsContainer>
            <AmenitiesContainer>
                <AmenitiesTitle>Comodidades do Hotel</AmenitiesTitle>
                {hotelDetails.amenities_hotel && hotelDetails.amenities_hotel.length > 0 ? (
                    hotelDetails.amenities_hotel.map((item, index) => (
                        <AmenitieItem key={index}>
                            {index + 1} - {item}
                        </AmenitieItem>
                    ))
                ) : (
                    <p>Nenhuma comodidade disponível</p>

                )}
            </AmenitiesContainer>
        </>

    );
};

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const NameContainer = styled.header`
    display: flex;
    justify-content: center;
    font-size: 40px;
    margin-top: 20px;
    color: #00008b;
`;

const Carousel = styled.div`
    display: flex;
    transition: transform 0.3s ease;
    margin-top: 10px;
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex: 0 0 100%;
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    transition: opacity 0.3s ease;
`;

const Image = styled.img`
    width: 500px;
    height: 320px;
    border-radius: 500px;
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px 16px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:first-of-type {
        left: 16px;
    }
    
    &:last-of-type {
        right: 16px;
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

const DetailsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    left: 10%;
    bottom: 30%;
    border: 3px dashed #00558a;
    padding: 20px;
`;

const Item = styled.li`
    font-size: 25px;
`;

const AmenitiesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    left: 70%;
    bottom: 13%;
    border: 3px dashed #00558a;
    padding: 20px;
`;

const AmenitieItem = styled.li`
    font-size: 25px;
`;

const DetailsTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    border-bottom: 2px dashed #00558a;
    margin-bottom: 10px;
`;

const AmenitiesTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    border-bottom: 2px dashed #00558a;
    margin-bottom: 10px;
`;

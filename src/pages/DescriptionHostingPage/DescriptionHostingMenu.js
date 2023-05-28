import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { useNavigate, useParams } from "react-router-dom";
import { CityContext } from "../../contexts/CityContext";
import {
    CarouselContainer, NameContainer, Carousel, Slide, CenteredButtonContainer,
    Image, Button, DetailsContainer, DetailsTitle, Item, Loading, AmenitiesContainer, AmenitieItem, AmenitiesTitle
} from "./styledHostingMenu";

export default function DescriptionHostingMenu() {

    const [hotelDetails, setHotelDetails] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { id } = useParams();

    const { selectedCity } = useContext(CityContext);

    const navigate = useNavigate();

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

    useEffect(() => {
        // Define a imagem do slide atual como plano de fundo da página
        if (hotelDetails.hotel_images && hotelDetails.hotel_images[currentIndex]) {
            const currentImage = hotelDetails.hotel_images[currentIndex];
            document.body.style.backgroundImage = `url(${currentImage})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }

        // Limpa a imagem de fundo quando o componente é desmontado
        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundRepeat = "";
            document.body.style.backgroundColor = "";
        };
    }, [currentIndex, hotelDetails.hotel_images]);

    const reserve = () => {

        const data = {
            hotel_name: hotelDetails.hotel_name,
            daily_price: hotelDetails.daily_price,
            description: hotelDetails.description,
            located_city: hotelDetails.located_city,
            hotel_images: hotelDetails.hotel_images,
            amenities_hotel: hotelDetails.amenities_hotel
        }

        apiAuth
            .salveHotel(data)
            .then(() => {
                alert("Hotel reservado com sucesso");
                navigate("/options");
            })
            .catch((err) => alert(err.message))
    }
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? hotelDetails.hotel_images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === hotelDetails.hotel_images.length - 1 ? 0 : prevIndex + 1));
    };


    if (loading && !id) {
        return <Loading></Loading>;
    }

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
            <CenteredButtonContainer>
                <button onClick={reserve}>Reservar hotel</button>
            </CenteredButtonContainer>
            <AmenitiesContainer>
                <AmenitiesTitle>Comodidades do Hotel</AmenitiesTitle>
                {hotelDetails.amenities_hotel && hotelDetails.amenities_hotel.length > 0 ? (
                    hotelDetails.amenities_hotel.map((item, index) => (
                        <AmenitieItem key={index}>
                            {item}
                        </AmenitieItem>
                    ))
                ) : (
                    <p>Nenhuma comodidade disponível</p>

                )}
            </AmenitiesContainer>
        </>
    );
};



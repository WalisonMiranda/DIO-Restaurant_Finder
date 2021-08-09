import React, { useState } from 'react';
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from "react-redux";

import Icon from '@material-ui/core/Icon';
import logo from "../../assets/logo.svg";
import restaurantImage from "../../assets/restaurante-fake.png";

import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from "../../components";

import { 
    Wrapper, 
    Container, 
    Search, 
    Logo,
    CarouselTitle, 
    Carousel,
    ModalTitle,
    ModalContent } from "./styles.js";


export default function Home() {
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);   
    const [ inputValue, setInputValue ] = useState('');
    const [ query, setQuery ] = useState(null);
    const [ placeId, setPlaceId ] = useState(null);
    const [ modalOpened, setModalOpened ] = useState(false);

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };
    
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setQuery(inputValue);
        }
    };

    const handleOpenModal = (placeId) => {
        setPlaceId(placeId);
        setModalOpened(true);
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo"/>
                    <TextField 
                        label="Pesquisar Restaurantes"
                        outlined="default"
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>
                            Na sua Área
                            </CarouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map(restaurant => {
                                    return <Card 
                                                key={restaurant.place_id}
                                                photo={restaurant.photos ? restaurant.photos[0].getUrl() 
                                                    : restaurantImage} 
                                                title={restaurant.name}
                                            />
                                })}
                            </Carousel>
                        </>
                        ) : <Loader />
                    }
                </Search>
                {restaurants.map(restaurant => {
                    return (
                        <RestaurantCard 
                            restaurant={restaurant}
                            onClick={() => handleOpenModal(restaurant.place_id)}
                        />
                    )
                })}
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal 
                open={modalOpened} 
                onClose={() => setModalOpened(!modalOpened)} 
            >
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>

                        <ModalContent>
                            <Icon>phone</Icon> 
                            {restaurantSelected?.formatted_phone_number}
                        </ModalContent>

                        <ModalContent>
                            <Icon>home</Icon>
                            {restaurantSelected?.formatted_address}
                        </ModalContent>
                        
                        <ModalContent>
                            {restaurantSelected?.opening_hours?.open_now 
                                ? (<><Icon>query_builder</Icon>Aberto Agora</>) 
                                : (<><Icon>watch_later</Icon>Fechado neste momento</>)}
                        </ModalContent>
                    </>) 
                    :
                    (<>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </>)
                }
            </Modal>
        </Wrapper>
    )
}

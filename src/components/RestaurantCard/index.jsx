import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import restaurantImage from "../../assets/restaurante-fake.png";
import Skeleton from '../Skeleton';

import { 
    Address,
    Restaurant, 
    RestaurantImage, 
    RestaurantInfo, 
    Title } from "./styles";

export default function RestaurantCard({ restaurant, onClick }) {
    const { name, rating, vicinity, formatted_address, photos } = restaurant;
    const [ imageLoaded, setImageLoaded ] = useState(false);



    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    activeColor="#e7711c"
                    value={rating}
                    size={18}
                    edit={false}
                />
                <Address>{vicinity || formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantImage 
                imageLoaded={imageLoaded}
                src={photos ? photos[0].getUrl() : restaurantImage} 
                alt={name} 
                onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    )
}

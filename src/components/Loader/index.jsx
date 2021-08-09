import React from 'react';
import Lottie from 'react-lottie';

import animationData from "../../assets/restaurants-loading.json";

export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        preserveAspectRatio: "xMidYmid slice"
    }

    return (
        <Lottie options={defaultOptions} />
    )
}
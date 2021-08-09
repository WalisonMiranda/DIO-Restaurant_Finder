import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: scroll;

`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: #ffffff;
`;

export const Logo = styled.img`
    margin-bottom: .9rem;
    padding: .5rem;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.8rem;
    margin: 1rem 0;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin: 0 .5rem;
    }

    .slick-slide > div > div {
        cursor: pointer;
    }
`;

export const ModalTitle = styled.p`
    margin-bottom: 0.6rem;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.8rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 0.6rem;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.1rem;
    font-size: 1rem;
    font-weight: normal;

    display: flex;
    align-items: center;
    & :first-child {
        margin-right: 0.75rem;
    }
`;

export const Map = styled.div`
    width: calc(100% - 360px);
    font-family: ${(props) => props.theme.fonts.regular};
`;



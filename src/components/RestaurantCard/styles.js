import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-top: .3rem;
    padding: 1rem;
    background-color: #ffffff;
    cursor: pointer;
    border-left: .3rem solid transparent;
    
    :hover {
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.8rem;
    margin-bottom: .6rem;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    line-height: 1.1rem;
    margin-bottom: .6rem;
    margin-top: .6rem;
    padding: 0 0.35rem;
`;

export const RestaurantImage = styled.img`
    display: ${props => props.imageLoaded ? "block" : "none"};
    height: 100px;
    width: 100px;
    border-radius: 6px;
    object-fit: cover;
`;

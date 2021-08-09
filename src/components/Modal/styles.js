import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(78, 89, 131, 0.5);
    backdrop-filter: blur(5px);

    z-index: 999;
`;

export const Dialog = styled.div`
    max-height: calc(100% - 144px);
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    background-color: #ffffff;
    box-shadow: 0 0 32px rgba(78, 89, 131, 0.2);
    border-radius: 8px;
`;

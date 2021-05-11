import styled from "styled-components";

export const ResultCardContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const card = styled.div`
    background-color: #f48b29;
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    padding: 2rem 1rem;
    font-size: .8rem;
    &:hover{
        transform: scale(1.03);
    }
`;

export const ResultImg = styled.p`
    img{
        width: 5rem;
        height: 5rem;
    }
`;
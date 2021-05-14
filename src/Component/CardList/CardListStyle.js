import styled from 'styled-components';

export const CardListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
    justify-content: center;
    padding: 1em 2rem;
`;

export const Hey = styled.div`
    background-color: #f48b29;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    border-radius: .5rem;
    border: 1px solid black;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    &:hover{
        transform: scale(1.03);
    }
`;

export const SpritesNormal = styled.img`
    width: 100px;
    height: 100px;
`;

export const Hello = styled.div`
    font-size: .8rem;
`;
import styled from 'styled-components';

export const Heading = styled.div`
    text-align: center;
    font-size: 2.5rem;
    margin-top: 1.5rem;
`;

export const Container = styled.div`
    width: 70%;
    margin-left: 15%;
    min-height: 75vh;
    background-color: #ac0d0d;
    border-radius: .5rem;
    padding: .5rem;
    margin-top: 2rem;
    @media (max-width:540px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }
`;
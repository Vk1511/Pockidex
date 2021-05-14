import styled from 'styled-components';

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 59% 40%;
    grid-template-rows: 1fr;
    gap: 1%;
    grid-template-areas:
        "left_side right_side";
    width: 100%;
    height: 100%;
`;

export const LeftSideStyle = styled.div`
    grid-area: left_side; 
    background-color: #f0c929;
    overflow-y: scroll;
    height: 75vh;
    overflow-x: hidden;
`;

export const RightSide = styled.div`
    padding: 1rem;
    grid-area: right_side;
    background-color: #f0c929;
`;
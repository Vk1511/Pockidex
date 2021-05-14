import styled from 'styled-components';

export const LeftSideContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 90%;
    grid-template-areas:
        "search_box"
        "card_list"
`;

export const SearchBoxStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardListStyle = styled.div`
    width: 100%;
    margin-top: .5rem;
`;
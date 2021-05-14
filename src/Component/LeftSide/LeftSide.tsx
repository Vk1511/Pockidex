import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import { LeftSideContainer, SearchBoxStyle, CardListStyle } from './LeftSideStyle';

interface LeftSideProps{
    allpockemon: pockemonSchema[];
    searchValue: (searchText : string) => void;
    handleclickedCard: (pockemonName : string | undefined) => void;
}

function LeftSide({ allpockemon, searchValue, handleclickedCard } : LeftSideProps) {
    return (
        <LeftSideContainer>
            <SearchBoxStyle>
                <SearchBox searchValue={searchValue}/>
            </SearchBoxStyle>
            <CardListStyle>
                <CardList allpockemon = {allpockemon}
                    handleclickedCard = { handleclickedCard }/>
            </CardListStyle>
        </LeftSideContainer>
    )
}

export default LeftSide

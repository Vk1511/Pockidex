import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import LeftSide from '../LeftSide/LeftSide';
import ResultCard from '../ResultCard/ResultCard';
import { CardContainer, RightSide, LeftSideStyle } from './CardContainerStyle';

interface CardsContainerProps{
    allpockemon: pockemonSchema[];
    selectedPockemon: pockemonSchema | undefined;
    searchValue: (searchText : string) => void;
    handleclickedCard: (pockemonName : string | undefined) => void;
}

function CardsContainer({ allpockemon, selectedPockemon, searchValue, handleclickedCard }: CardsContainerProps) {
    
    return (
        <CardContainer>
            <LeftSideStyle>
                <LeftSide allpockemon = {allpockemon}
                    searchValue={searchValue}
                    handleclickedCard = { handleclickedCard }/>
            </LeftSideStyle>
            <RightSide>
                <ResultCard selectedPockemon = {selectedPockemon}/>
            </RightSide>
        </CardContainer>
    )
}

export default CardsContainer

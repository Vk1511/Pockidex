import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import LeftSide from '../LeftSide/LeftSide';
import ResultCard from '../ResultCard/ResultCard';
import './CardsContainer.css';

interface CardsContainerProps{
    allpockemon: pockemonSchema[];
    selectedPockemon: pockemonSchema | undefined;
    searchValue: (searchText : string) => void;
    handleclickedCard: (pockemonName : string | undefined) => void;
}

function CardsContainer({ allpockemon, selectedPockemon, searchValue, handleclickedCard }: CardsContainerProps) {
    
    return (
        <div className="card_container">
            <div className="left_side">
                <LeftSide allpockemon = {allpockemon}
                    searchValue={searchValue}
                    handleclickedCard = { handleclickedCard }/>
            </div>
            <div className="right_side">
                <ResultCard selectedPockemon = {selectedPockemon}/>
            </div>
        </div>
    )
}

export default CardsContainer

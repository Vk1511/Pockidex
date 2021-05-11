import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './LeftSide.css';

interface LeftSideProps{
    allpockemon: pockemonSchema[];
    searchValue: (searchText : string) => void;
    handleclickedCard: (pockemonName : string | undefined) => void;
}

function LeftSide({ allpockemon, searchValue, handleclickedCard } : LeftSideProps) {
    return (
        <div className="leftSide_con">
            <div className="search_box">
                <SearchBox searchValue={searchValue}/>
            </div>
            <div className="card_list">
                <CardList allpockemon = {allpockemon}
                    handleclickedCard = { handleclickedCard }/>
            </div>
        </div>
    )
}

export default LeftSide

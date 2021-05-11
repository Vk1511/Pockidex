import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import './CardList.css';

interface CardListProps{
    allpockemon: pockemonSchema[];
    handleclickedCard: (pockemonName : string | undefined) => void;
}

function CardList({ allpockemon, handleclickedCard } : CardListProps) {

    return (
        <div className="cardList_con">
        {
            allpockemon.map((pockemon,id) => {
                return(
                    <div key={id} onClick={() => handleclickedCard(pockemon.name)}>
                        <div className="hey">
                            <img src={pockemon.sprites?.normal} alt="pockemonimg" className="spritesNormal"/>
                            <div className="hello">Name: {pockemon.name}</div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default CardList

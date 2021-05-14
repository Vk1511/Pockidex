import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import { CardListContainer, Hello, Hey, SpritesNormal } from './CardListStyle';

interface CardListProps{
    allpockemon: pockemonSchema[];
    handleclickedCard: (pockemonName : string | undefined) => void;
}

function CardList({ allpockemon, handleclickedCard } : CardListProps) {

    return (
        <CardListContainer>
        {
            allpockemon.map((pockemon,id) => {
                return(
                    <div key={id} onClick={() => handleclickedCard(pockemon.name)}>
                        <Hey>
                            <SpritesNormal src={pockemon.sprites?.normal} alt="pockemonimg" className="spritesNormal"/>
                            <Hello>Name: {pockemon.name}</Hello>
                        </Hey>
                    </div>
                )
            })
        }
        </CardListContainer>
    )
}

export default CardList

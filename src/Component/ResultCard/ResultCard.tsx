import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import './ResultCard.css';

interface ResultCardProps{
    selectedPockemon: pockemonSchema | undefined;
}

function ResultCard({ selectedPockemon,  }: ResultCardProps) {

    return (
        <div className="result_card_con">
            {
                selectedPockemon ? (
                    <div className="card">
                        <p><img src={selectedPockemon.sprites?.animated} alt="animatedImg" /></p>
                        <p><strong>Name: </strong>{selectedPockemon.name}</p>
                        <p><strong>Height: </strong>{selectedPockemon.height}</p>
                        <p><strong>Weight: </strong>{selectedPockemon.weight}</p>
                        <p><strong>Base Experience: </strong>{selectedPockemon.base_experience}</p>
                    </div>
                ):
                (
                    <div className="card">
                        welcome to BenDex
                    </div>
                )
            }
        </div>
    )
}

export default ResultCard

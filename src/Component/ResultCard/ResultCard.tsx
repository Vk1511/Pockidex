import React from 'react';
import { pockemonSchema } from '../../Type/PockemonSchema';
import { Card, ResultCardContainer, ResultImg } from './ResultCardStyle';

interface ResultCardProps{
    selectedPockemon: pockemonSchema | undefined;
}

function ResultCard({ selectedPockemon,  }: ResultCardProps) {

    return (
        <ResultCardContainer>
            {
                selectedPockemon ? (
                    <Card>
                        <ResultImg><img src={selectedPockemon.sprites?.animated} alt="animatedImg" /></ResultImg>
                        <ResultImg><strong>Name: </strong>{selectedPockemon.name}</ResultImg>
                        <ResultImg><strong>Height: </strong>{selectedPockemon.height}</ResultImg>
                        <ResultImg><strong>Weight: </strong>{selectedPockemon.weight}</ResultImg>
                        <ResultImg><strong>Base Experience: </strong>{selectedPockemon.base_experience}</ResultImg>
                    </Card>
                ):
                (
                    <Card>
                        welcome to BenDe
                    </Card>
                )
            }
        </ResultCardContainer>
    )
}

export default ResultCard

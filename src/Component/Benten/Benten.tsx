import React, { useState, useEffect } from 'react';
import { pokemonData } from '../../Data/BentenData';
import { pockemonSchema, pockemonSpritesSchema, unpatchedPockemonSchema } from '../../Type/PockemonSchema';
import CardsContainer from '../CardsContainer/CardsContainer';
import './Benten.css';

interface bentenProps {
    searchedFied: string;
    AllPockemon: pockemonSchema[];
    searchedPockemon: pockemonSchema[];
    selectedPockemon: pockemonSchema | undefined;
}

function Benten(){

    const [bendata,setBendata] = useState<bentenProps>({
        searchedFied: "",
        AllPockemon: [],
        searchedPockemon: [],
        selectedPockemon: undefined
    });

    const patchedPockemonData = (pockemons : unpatchedPockemonSchema[]) => {
        const patchedpockemons = pockemons.map((pockemon) => {
            let pockemonsprites : pockemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try{
                pockemonsprites = pockemon.sprites && JSON.parse(pockemon.sprites);
            }
            catch(e){
                console.log("error at parsing data: ",e);
            }

            const patchedPockmen : pockemonSchema = {
                ...pockemon,
                sprites: pockemonsprites,
            }

            return patchedPockmen;
        });
        return patchedpockemons;
    }
    
    useEffect(() => {
        //patching stringify pockemon
        const patchedpockemons : pockemonSchema[] = patchedPockemonData(pokemonData);
        
        setBendata(
            {...bendata,
            AllPockemon: patchedpockemons,
            searchedPockemon: patchedpockemons,
            }
        );
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const searchValue = (searchText : string) => {
        
        const searchedPockemon = bendata.AllPockemon.filter((pockemon : pockemonSchema) => {
            return(
                pockemon.name && pockemon.name.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setBendata(
            {...bendata,
                searchedPockemon: searchedPockemon,
            }
        );
    }

    const handleclickedCard = (pockemonName : string | undefined) => {

        const selectedPockemon = bendata.searchedPockemon.find((pockemon : pockemonSchema) => pockemon.name === pockemonName)
        setBendata(
            {...bendata,
                selectedPockemon: selectedPockemon,
            }
        );
    }

    return (
        <div>
            <h1 className="heading">
                BenDex
            </h1>
            <div className="container">
                <CardsContainer allpockemon={bendata.searchedPockemon} 
                    selectedPockemon={bendata.selectedPockemon}
                    searchValue={searchValue}
                    handleclickedCard = {handleclickedCard}/>
            </div>
        </div>
    )
}

export default Benten

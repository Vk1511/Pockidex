export interface unpatchedPockemonSchema {
    id?: string; //% allow to insert null...so if data is misssing of any field app will not carsh
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;   //in actual data sprites is a string
}

export interface pockemonSpritesSchema {    //sprites contains strings, e have separate it
    normal?: string; 
    animated?: string;
}

export interface pockemonSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: pockemonSpritesSchema;    //2 separated string object
}
import React from 'react';
import './SearchBox.css';

interface SearchBoxProps{
    searchValue: (searchText : string) => void;
}

function SearchBox({ searchValue }: SearchBoxProps) {
    return (
        <div>
            <input type="search" placeholder="Search Alien" className="search_box" onChange={(event) => searchValue(event.target.value)}/>
        </div>
    )
}

export default SearchBox

import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
    return (
        <div className='searchbar'>
            <label htmlFor='search'>
                <SearchIcon />
            </label>
            <input id='search' placeholder='search'/>
        </div>
    )
}
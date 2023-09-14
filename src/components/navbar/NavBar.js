import React from 'react';
import './NavBar.css';
import Logo from './logo/Logo';
import Search from './search/Search';
import Actions from './actions/Actions';

export default function NavBar(){
    return (
        <div className='navbar'>
            <Logo />
            <Search />
            <Actions />
        </div>
    )
}
import React from 'react';
import './Content.css'
import TrendingToday from './trending-today/TrendingToday';
import MainBar from './main-bar/MainBar';
import SideBar from './side-bar/SideBar';

export default function Content(){
    return(
        <div className='content'>
            <TrendingToday />
            <span className='popular-post-title'>Popular posts</span>
            <div className='main-side-wrapper'>
                <MainBar />
                <SideBar />
            </div>
            
        </div>
    )
}
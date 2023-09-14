import React from 'react';
import './MainBar.css';
import { Whatshot } from '@material-ui/icons';
import { NewReleases } from '@material-ui/icons';
import { TrendingUp } from '@material-ui/icons';
import { Menu } from '@material-ui/icons';
import { MoreHoriz } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import Posts from '../posts/Posts';

export default function MainBar(){
    return(
        <div className='main-bar'>
            <div className='update-card'>
                <div className='top-section'>
                    <span>UPDATES FROM REDDIT</span>
                    <CloseIcon className='hoverable'/>
                </div>
                <div className='body'>
                    <div className='context'>
                    <span className='title'>Keep yourself safe and informed</span> <br />
                    <span className='descripti  on'>Visit r/CoronaVirus to talk about COVID-19, 
                    and visit www.who.int for more information</span>
                    </div>
                    <img src='./images/pin.jpg' alt=''/>
                </div> 
            </div>
            <div className='filter-container'>
                <div className='element-filter hoverable'>
                    <Whatshot />
                    <span>Hot</span>
                </div>
                <div className='element-filter hoverable'>
                    <span>EveryWhere</span>
                    <ArrowDropDownIcon />
                </div>
                <div className='element-filter-secondary hoverable'>
                    <NewReleases />
                    <span>New</span>
                </div>
                <div className='element-filter-secondary hoverable'>
                    <TrendingUp />
                    <span>Top</span>
                </div>
                <div className='element-filter-teritary hoverable'>
                    <MoreHoriz />
                </div>
                <div className='spacer'></div>
                <div className='menu-items hoverable'>
                    <Menu />
                    <ArrowDropDownIcon />
                </div>
            </div>

            <div className='mainbar-posts'>
                <Posts />
            </div>
        </div>
    )
}

import React from 'react';
import './Community.css';
import Button from '../../button/Button';
import communities from '../../../data/communities/communities.json';
import { ArrowDropUp } from '@material-ui/icons';

export default function Community(){
    return(
        <div className='community-section'>
            <div className='title'>
                <span>Today's Top Growing Communities</span>
            </div>
            <div className='communities-wrapper'>
                {communities.map((item, index) => {
                return(
                    <div key={index} className='community'>
                        <span>{index + 1}</span>
                        <span><ArrowDropUp /></span>
                        <img src={item.image_src} alt=''/>
                        <span className='name'>r/{item.name}</span>
                    </div>
                )
            })}
            </div>
            <div className='action-buttons'>
                <span className='primary-button'><Button primary label='VIEW ALL' /></span>
                <div className='teritary-buttons'>
                    <span className='teritary-button'><Button teritary label ='Sports' /></span>
                    <span className='teritary-button'><Button teritary label ='News' /></span>
                    <span className='teritary-button'><Button teritary label ='Gaming' /></span>
                    <span className='teritary-button'><Button teritary label ='Aww' /></span>
                </div>
            </div>
        </div>
    )
}
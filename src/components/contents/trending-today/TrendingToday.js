import React from 'react';
import './TrendingToday.css';

import TrandingItem from '../../../data/trending-items/trending-items.json';

export default function TrandingToday(){
    return(
        <div className='trending-today'>
            <span className='title'>Trending Today!</span>
            <div className='items'>
                {TrandingItem.map((item,index) => {
                    return(
                        <div key={index} className='trending-item hoverable' 
                        style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent),
                        url(${item.image_src})`}}>
                            <div className='context'>
                                <span className='title'>{item.title}</span><br />
                                <span className='description'>{item.description}</span>
                                <div className='subreddit'>
                                    <img src={item.subreddit.image_src} alt=''/>
                                    <span>r/{item.subreddit.name}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
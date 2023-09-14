import React, { useEffect, useState, useRef } from 'react';
import './Video.css';
import { Fullscreen, Pause, PlayArrow, Settings, VolumeOff } from '@material-ui/icons';

export default function Video({video_src, duration}){
    //const [time, setTime] = useState(0);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const sliderRef = useRef(null);
    const [time, setTime] = useState(0);



    useEffect(() => {
        //const video = document.getElementById('video-player');
        const video = videoRef.current;
        const slider = sliderRef.current;
        if(video){
        video.addEventListener('timeupdate', (e) => {
            let time = ( 100 / video.duration ) * video.currentTime;
            setTime(Math.round(video.currentTime));
            
            slider.value = `${time}`;
        });
    }
    slider.addEventListener('change', (e) => {
        let sliderValue = parseInt(slider.value);
        let time = sliderValue / (100 / video.duration);

        video.currentTime = time;
    })
    }, [videoRef]);

    useEffect(() => {
       const video = videoRef.current;
        if(video){
            if(!playing){
                video.pause();
            } else {
                video.play();
            }
        }
    }, [playing])

    return(
        <div id='video-container'>
            <video src={video_src} id='video-player'ref={videoRef}/>
            <div id='video-controls'>
                <div className='video-controls-background'></div>
                <button className='video-button'><img className='reddit-logo' src='images/reddit-logo.jpg' alt=''/></button>
                <button onClick={(e) => setPlaying(value => !value)} className='video-button video-control' >
                    {playing ? <Pause /> : <PlayArrow />}
                </button>
                <span className='video-control'>{time}</span>
                <input ref = {sliderRef} className='video-control' type='range'/>
                <span className='video-control'>{duration}</span>
                <button className='video-button video-control'>
                    <Settings />
                </button>
                <button className='video-button video-control'>
                    <Fullscreen />
                </button>
                <button className='video-button video-control-always-present'>
                    <VolumeOff />
                </button>
            </div>
        </div>
    )
}
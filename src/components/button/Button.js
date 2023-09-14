import React from 'react';
import './Button.css';

export default function Button({primary, secondary, teritary, label}){
    let buttonClass = '';
    if(teritary){
        buttonClass = 'button teritary-button';
        return <div className= {buttonClass}>{label}</div>;
    } else if(secondary) {
        buttonClass = 'button secondary-button';
        return <div className= {buttonClass}>{label}</div>;

    } else {
        buttonClass = 'button primary-button';
        return <div className= {buttonClass}>{label}</div>;
    }
}
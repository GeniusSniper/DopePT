import React from 'react';
import '../styles/splash.css';
import Background from '../styles/images/splash-image2.jpg';

function splash() {
    return (
        <div className='splash-container'>
            <img 
            className='splash-image' 
            src={Background} 
            alt='splash-image'
            />
            <div className='welcome-message'>          
                <h1>Welcome to Dope PT</h1>
                <h3>Helping patients and clinicians connect</h3>
            </div>  
        </div>
    )
}

export default splash;
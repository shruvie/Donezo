import './popup-notif.css';
import { useEffect, useState } from 'react';

function Popup({message,type,onClose,duration=5000}){

    useEffect(()=>{
        if(message){
            const timer=setTimeout(() => {
                onClose();
            }, duration);

            return ()=> clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null;


    return(
        <div className={`popup ${type}`}>
                <p>{message}</p>

            <button onClick={onClose}className='ico'>×</button>
        </div>
    )
}

export default Popup;
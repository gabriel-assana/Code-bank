import '../styles/buttonAction.css';

import React from 'react';

import pix from '../assets/pix.png';

interface ButtonAction { 
    title: string,
}


export default function ButtonAction({title}:ButtonAction) {

    return(
     <>
        <div className="buttonAction" 
                onClick={() => handleTransaction(title)} >
                    {title}
        <img className="pix" src={pix} alt="pix-image"/>
        </div>
    </>   
    
    )


    function handleTransaction(transaction:string){
        alert(transaction)
    }


}
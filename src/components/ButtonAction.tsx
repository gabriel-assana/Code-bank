import '../styles/buttonAction.css';

import React from 'react';

import pix from '../assets/pix.svg';

interface ButtonActionProps { 
    title: string,
}


export function ButtonAction ({title}:ButtonActionProps) {

    return(
     <>
        <div className="buttonAction" onClick={() => handleTransaction(title)} >
        <img className="pix" src={pix} alt={title}/>
                    {title}
        </div>
    </>   
    
    )


    function handleTransaction(transaction:string){
        alert(transaction)
    }


}
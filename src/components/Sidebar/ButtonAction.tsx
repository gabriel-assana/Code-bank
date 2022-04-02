import '../../styles/sidebar/buttonAction.css';

import React, { useState } from 'react';

import pix from '../../assets/pix.svg';


interface ButtonActionProps { 
    title: string,
    onOpenNewTransitionModal: () => void;
}

export function ButtonAction ({title, onOpenNewTransitionModal}:ButtonActionProps) {

    return(
     <>
        <div className="buttonAction" onClick={() => onOpenNewTransitionModal()} >
            <img className="pix" src={pix} alt={title}/>
                        {title}
        </div>
    </>   
    
    )

}
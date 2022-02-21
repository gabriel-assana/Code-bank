import '../styles/buttonAction.css';

import React from 'react';

interface ButtonAction { 
    title: string,
}


export default function ButtonAction(props:ButtonAction) {

    return(
     <button className="buttonAction" onClick={() => handleTransaction(props.title)} >{props.title}</button>
    )


    function handleTransaction(transaction:string){
        alert(transaction)
    }


}
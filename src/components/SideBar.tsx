import '../styles/sidebar.css';

import React from 'react';

import ButtonAction from './ButtonAction';


export default function SiderBar(){

    return(

        <div className="sidebar">
            <ButtonAction title="Depositar"/>
            <ButtonAction title="Sacar"/>
            <ButtonAction title="Transferir"/>
            <ButtonAction title="Extrato"/>
        </div>



    )
}

 
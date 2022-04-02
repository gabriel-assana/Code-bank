import '../styles/card.css';

import { useState } from 'react';

import cifrao from '../assets/cifrao.svg';

export function Card(){

    const [balances, setBalances] = useState(1000)
     
    return(
        <div className="card">
          <div className="card-header">
            <img src={cifrao} alt="cifrao"></img>
            <span>Conta</span>
          </div>
          <div className="card-body">
            <span className="title">Saldo disponivel</span>
                <span className="value">R$:{balances}</span>  
            </div>
        </div>
    )
}

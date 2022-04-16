import '../../styles/form/Form.css';

import React, { FormEvent, useState } from 'react';

import credito from '../../assets/credit-card.svg';
import debito from '../../assets/money.svg';
import { api } from '../../services/api';

export function FormPayments(){

    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    function handleCreatePayment(event: FormEvent) {
        event.preventDefault();    
        
        const paymentData = {
            value,
            description,
            type,
            createdAt: new Date()
        }
        
         api.post('transactions', paymentData)
    }

    return(
        <>
            <form onSubmit={handleCreatePayment}>

                <h2>Pagamentos</h2>

                <input 
                    type="number"
                    placeholder="Valor a ser pago"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <div className="container-btns">
                    <button
                        type="button"
                        className="type-card"
                        value={type}
                        onClick={()=> setType("Débito em Conta")}
                    >
                        <img src={debito} alt="Débito em Conta"/>
                        <span>Débito em Conta</span>
                    </button>
                    <button
                        type="button"
                        className="type-card"
                        value={type}
                        onClick={()=> setType("Cartão de Crédito")}
                    >
                        <img src={credito} alt="Cartão de Credito"/>
                        <span>Cartão de Crédito</span>
                    </button>
                </div>

                <input 
                    placeholder="Descrição do deposito"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                
                <button 
                    type="submit"
                    className="btn-submit"
                >
                        Pagar
                </button>
            </form>

        </>


    )
    

}


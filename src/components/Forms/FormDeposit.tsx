import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';

import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

export function FormDeposit(){

    const data = useContext(TransactionsContext);

    const [valueDeposit, setValueDeposit] = useState(0)
    const [descriptionDeposit, setDescriptionDeposit] = useState('')


    function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();    

        const depositData = {
            valueDeposit,
            descriptionDeposit,
        }

         api.post('deposit', depositData)
    }

    return(
        <>
            <form onSubmit={handleCreateDeposit}>

                <h2>Depositos</h2>

                <input 
                    type="number"
                    placeholder="Valor"
                    value={valueDeposit}
                    onChange={event => setValueDeposit(Number(event.target.value))}
                />

                <input 
                    placeholder="Descrição do deposito"
                    value={descriptionDeposit}
                    onChange={event => setDescriptionDeposit(event.target.value)}
                />
                
                <button type="submit">
                    Depositar
                </button>
            </form>

        </>


    )
    

}

function userEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}

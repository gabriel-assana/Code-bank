import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';

import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

export function FormDeposit(){

    const data = useContext(TransactionsContext);

    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')


    function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();    

        const depositData = {
            value,
            description,
            type: "Deposito",
            createdAt: new Date()
        }

         api.post('transactions', depositData)
    }

    return(
        <>
            <form onSubmit={handleCreateDeposit}>

                <h2>Depositos</h2>

                <input 
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <input 
                    placeholder="Descrição do deposito"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                
                <button 
                    type="submit"
                    className="btn-submit"
                >
                    Depositar
                </button>
            </form>

        </>


    )
    

}

function userEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}

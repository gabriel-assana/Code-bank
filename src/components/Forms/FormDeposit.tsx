import '../../styles/form/Form.css';

import React, { FormEvent, useState } from 'react';

import { api } from '../../services/api';

export function FormDeposit(){

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
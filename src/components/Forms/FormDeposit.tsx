import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

interface FormDepositProps {
    onRequestClose: () => void
}

export function FormDeposit({ onRequestClose }:FormDepositProps){

    const { createTransactionDeposit } = useContext(TransactionsContext)

    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')

   async function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();    
               
       await createTransactionDeposit({
            value,
            description,
            type:"Deposito"
        })
 
        onRequestClose();
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
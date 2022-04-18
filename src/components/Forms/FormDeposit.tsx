import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

interface FormDeposit {
    onRequestClose: () => void
}


export function FormDeposit({ onRequestClose }:FormDeposit){

    const { createTransactionDeposit } = useContext(TransactionsContext)

    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')

    function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();    
               
       createTransactionDeposit({
            value,
            description,
            type:"Deposito"
        })
 

        onRequestClose();
        
/*         const depositData = {
            value,
            description,
            type: "Deposito",
            createdAt: new Date()
        } */
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
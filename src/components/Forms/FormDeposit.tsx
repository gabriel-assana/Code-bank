import '../../styles/form/Form.css';

import React, { FormEvent, useState } from 'react';

export function FormDeposit(){

    const [valueDeposit, setValueDeposit] = useState(0)
    const [descriptionDeposit, setDescriptionDeposit] = useState('')


    function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();      

        console.log(
            valueDeposit,
            descriptionDeposit
        )
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
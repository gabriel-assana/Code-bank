import '../../styles/form/Form.css';

import React from 'react';

export function FormDeposit(){

    return(
        <>
            <form>

                <h2>Depositos</h2>

                <input 
                    placeholder="Valor"
                />

                <input 
                    placeholder="Descrição do deposito"
                />
                
                <button type="submit">Depositar</button>
            </form>

        </>


    )
    

}
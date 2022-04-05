import '../../styles/form/FormModalDepositar.css';

import React from 'react';

export function FormModalDepositar(){

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
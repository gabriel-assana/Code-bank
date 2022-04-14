import '../../styles/form/Form.css';

import React from 'react';

export function FormTransfers(){

    return(
        <>
            <form>

                <h2>Tranferir</h2>

                <span className="icon-input">
                    <input className="input-value" type="number" placeholder="Valor"/>
                </span>

                <input 
                    type="number" 
                    placeholder="Agência"
                />
                
                <input 
                    type="number" 
                    placeholder="Conta"
                />

                <input 
                    placeholder="Descrição da Transferência"
                />
                
                <button type="submit">Tranferir</button>
            </form>

        </>


    )
    

}

import '../../styles/form/Form.css';

import React from 'react';

export function FormTransfers(){

    return(
        <>
            <form>

                <h2>Tranferir</h2>

                <input 
                    type="number"
                    placeholder="Valor a ser pago"
                />

                <input 
                    placeholder="Descrição do deposito"
                />
                
                <button type="submit">Tranferir</button>
            </form>

        </>


    )
    

}

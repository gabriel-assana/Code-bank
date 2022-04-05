import '../../styles/form/Form.css';

import React from 'react';

export function FormPayments(){

    return(
        <>
            <form>

                <h2>Pagamentos</h2>

                <input 
                    type="number"
                    placeholder="Valor a ser pago"
                />

                <input 
                    placeholder="Descrição do deposito"
                />
                
                <button type="submit">Pagar</button>
            </form>

        </>


    )
    

}

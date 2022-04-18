import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

interface FormTransferProps {
    onRequestClose: () => void
}

export function FormTransfers({onRequestClose}:FormTransferProps){

    const { createTransactionTransfer } = useContext(TransactionsContext)

    const [value, setValue] = useState(0)
    const [agency, setAgency] = useState(0)
    const [account, setAccount] = useState(0)
    const description = "Ag " + agency + " Cc " + account 

    
    function handleCreateTransfer(event: FormEvent) {
        event.preventDefault();    
        
        createTransactionTransfer({
            value,
            description,
            type:"Transferência"
        })
        
        onRequestClose()
    }
        

    return(
        <>
            <form onSubmit={handleCreateTransfer}>

                <h2>Tranferir</h2>

                    <input 
                        className="input-value" 
                        placeholder="Valor"
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                    />        
                <input 
                    type="number" 
                    placeholder="Agência"
                    value={agency}
                    onChange={event => setAgency(Number(event.target.value))}
                />
                
                <input 
                    type="number" 
                    placeholder="Conta"
                    value={account}
                    onChange={event => setAccount(Number(event.target.value))}
                />
                
                <button 
                    type="submit"
                    className="btn-submit"
                >
                   Tranferir
                </button>
            </form>

        </>


    )
    

}

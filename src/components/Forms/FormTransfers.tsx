import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';

import close from '../../assets/close.svg';
import { TransactionsContext } from '../../TransactionsContext';

interface FormTransferProps {
    onRequestClose: () => void;
}

export function FormTransfers({onRequestClose}:FormTransferProps){

    const { createTransactionTransfer } = useContext(TransactionsContext)

    const [value, setValue] = useState(0)
    const [agency, setAgency] = useState(0)
    const [account, setAccount] = useState(0)
    const description = "Ag " + agency + " Cc " + account 

    
    function handleCreateTransfer(event: FormEvent) {
        event.preventDefault();    
        
        if(value == 0 && agency == 0 && account == 0){
            alert("Por favor, digite valor, agencia e conta para realizar a transferência!")
        }else{
            createTransactionTransfer({
                value,
                description,
                type:"Transferência"
            })
            
            onRequestClose()
        }


    }
        

    return(
        <>
            <form>

            <button className="btn-close" onClick={onRequestClose}>  
                <img src={close} alt="Botão de Fechar" />
            </button>

                <h2>Tranferir</h2>

                <label htmlFor="transfer-value">
                    Qual valor gostaria de transferir ?
                    <input
                        id="transfer-value"
                        className="input-value" 
                        placeholder="Valor"
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                    /> 
                </label>     
                <label htmlFor="agency">
                    Agência
                    <input
                        id="agency"
                        type="number" 
                        placeholder="Agência"
                        value={agency}
                        onChange={event => setAgency(Number(event.target.value))}
                    />
                </label>    
                <label htmlFor="account">
                    Conta
                    <input 
                        id="account"
                        type="number" 
                        placeholder="Conta"
                        value={account}
                        onChange={event => setAccount(Number(event.target.value))}
                    />
                </label>    
                <button 
                    type="submit"
                    className="btn-submit"
                    onClick={handleCreateTransfer}
                >
                   Tranferir
                </button>
            </form>

        </>


    )
    

}

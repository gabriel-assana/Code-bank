import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

import close from '../../assets/close.svg';
import { TransactionsContext } from '../../TransactionsContext';

interface FormTransferProps {
    onRequestClose: () => void;
}

export function FormTransfers({onRequestClose}:FormTransferProps){

    const { createTransactionTransfer } = useContext(TransactionsContext)

    const [value, setValue] = useState("0")
    const [agency, setAgency] = useState(0)
    const [account, setAccount] = useState(0)
    const description = "Ag " + agency + " Cc " + account 

    
    function handleCreateTransfer(event: FormEvent) {
        event.preventDefault();    
        
            if(value == "0" && agency == 0 && account == 0){
                alert("Por favor, digite o valor, agencia e conta para realizar a transferência!");
            }else if( value >= "0" && agency == 0 && account == 0){
                alert("Por favor, digite agencia e conta para realizar a transferência!");
            }else if( value >= "0" && agency == 0 && account !== 0){
                alert("Por favor, digite a agência para qual deseja realizar a transferência!");
            }else if( value >= "0" && agency !== 0 && account == 0){
                    alert("Por favor, digite a conta para qual deseja realizar a transferência!");
            }else{ 
                const parsedValue = parseFloat(value.replace(',', '.'));
                createTransactionTransfer({
                    value: parsedValue,
                    description,
                    type:"Transferência"
                })
                
                onRequestClose()
            }    
    }    
    
    const handleCurrencyChange = (value: string | undefined) => {
        if (value === undefined) {
          setValue('0');
        } else {
          setValue(value);
        }
      };

    return(
        <>
            <form>

            <button className="btn-close" onClick={onRequestClose}>  
                <img src={close} alt="Botão de Fechar" />
            </button>

                <h2>Tranferir</h2>

                <label htmlFor="transfer-value">
                    Qual valor gostaria de transferir ?
                    <CurrencyInput
                        prefix="R$ "
                        decimalSeparator=","
                        groupSeparator="."
                        value={value}
                        onValueChange={handleCurrencyChange}
                    />
                </label>     
                <label htmlFor="agency">
                    Agência
                    <input
                        id="agency"
                        placeholder="Agência"
                        value={agency}
                        minLength={4}
                        maxLength={4}
                        onChange={event => setAgency(Number(event.target.value))}
                    />
                </label>    
                <label htmlFor="account">
                    Conta
                    <input 
                        id="account"
                        placeholder={"Conta"}
                        value={account}
                        minLength={5}
                        maxLength={5}
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

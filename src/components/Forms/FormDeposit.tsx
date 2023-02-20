import '../../styles/form/Form.css';

import React, { FormEvent, useContext, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

import close from '../../assets/close.svg';
import { TransactionsContext } from '../../TransactionsContext';


interface FormDepositProps {
    onRequestClose: () => void;
}

export function FormDeposit({ onRequestClose }:FormDepositProps){

    const { createTransactionDeposit } = useContext(TransactionsContext)

    const [value, setValue] = useState('0')
    const [description, setDescription] = useState('')

    const handleCurrencyChange = (value: string | undefined) => {
        if (value === undefined) {
          setValue('0');
        } else {
          setValue(value);
        }
      };
        
   async function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();    
        
        if(value === '0'){
            alert("Por favor digite um valor superior a 0 !")
        }else{
            const parsedValue = parseFloat(value.replace(',', '.'));
            await createTransactionDeposit({
                    value: parsedValue,
                    description,
                    type:"Deposito"
                })
                
                
            onRequestClose();
        }
 
    }
    
    return(
        <>
            
            <form>
                
            <button className="btn-close" onClick={onRequestClose}>  
                <img src={close} alt="Botão de Fechar" />
            </button>

                <h2>Depositos</h2>

                <label htmlFor="deposit">
                    Qual valor gostaria de realizar o depositar ?
                    <CurrencyInput
                        prefix="R$ "
                        decimalSeparator=","
                        groupSeparator="."
                        value={value}
                        onValueChange={handleCurrencyChange}
                    />
                </label>


                <input 
                    placeholder="Descrição do deposito"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
              
                <button 
                    type="submit"
                    className="btn-submit"
                    onClick={handleCreateDeposit}
                >
                    Depositar
                </button>
            </form>

        </>


    )
    

}
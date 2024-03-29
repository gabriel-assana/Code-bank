import '../../styles/form/Form.css';

import { FormEvent, useContext, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

import close from '../../assets/close.svg';
import credito from '../../assets/credit-card.svg';
import debito from '../../assets/money.svg';
import { TransactionsContext } from '../../TransactionsContext';

interface FormPaymentsProps {
    onRequestClose: () => void;
}

export function FormPayments({onRequestClose}: FormPaymentsProps){

    const { createTransactionPayment } = useContext(TransactionsContext);

    const [value, setValue] = useState('0')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    async function handleCreatePayment(event: FormEvent) {
        event.preventDefault(); 
        
        if(value == "0" && type == ""){
            alert("Por favor digite um valor superior a 0 e escolha a forma de pagamento!")
        }else if(value == "0" && type !== ""){
            alert("Por favor digite um valor superior a 0!")          
        }else if(value !== "0" && type == ""){
            alert("Por favor escolha a forma de pagamento!") 
        }else{
            const parsedValue = parseFloat(value.replace(',', '.'));
            await createTransactionPayment({
                value: parsedValue,
                description,
                type
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

                <h2>Pagamentos</h2>

                <label htmlFor="payment">
                    Qual valor gostaria de realizar o pagamento ?
                    <CurrencyInput
                        prefix="R$ "
                        decimalSeparator=","
                        groupSeparator="."
                        value={value}
                        onValueChange={handleCurrencyChange}
                    />
                </label>

                <div className="container-btns">
                    <button
                        type="button"
                        className="type-card"
                        value={type}
                        onClick={()=> setType("Débito em Conta")}
                    >
                        <img src={debito} alt="Débito em Conta"/>
                        <span>Débito em Conta</span>
                    </button>
                    <button
                        type="button"
                        className="type-card"
                        value={type}
                        onClick={()=> setType("Cartão de Crédito")}
                    >
                        <img src={credito} alt="Cartão de Credito"/>
                        <span>Cartão de Crédito</span>
                    </button>
                </div>

                <input 
                    placeholder="Descrição do deposito"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                
                <button 
                    type="submit"
                    className="btn-submit"
                    onClick={handleCreatePayment}
                >
                        Pagar
                </button>
            </form>

        </>


    )
    

}


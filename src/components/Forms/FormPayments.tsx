import '../../styles/form/Form.css';

import React from 'react';

import debito from '../../assets/cifrao.svg';
import credito from '../../assets/credit-card-1.svg';

export function FormPayments(){

    return(
        <>
            <form>

                <h2>Pagamentos</h2>

                <input 
                    type="number"
                    placeholder="Valor a ser pago"
                />

                <div className="container-btns">
                    <button
                        type="button"
                        className="type-card"
                    >
                        <img src={debito} alt="Débito em Conta"/>
                        <span>Débito em Conta</span>
                    </button>
                    <button
                        type="button"
                        className="type-card"
                    >
                        <img src={credito} alt="Cartão de Credito"/>
                        <span>Cartão de Crédito</span>
                    </button>
                </div>

                <input 
                    placeholder="Descrição do deposito"
                />
                
                <button 
                    type="submit"
                    className="btn-submit"
                >
                        Pagar
                </button>
            </form>

        </>


    )
    

}


import '../../styles/dashboard/dashboard.css';

import React, { useContext } from 'react';

import imgCifrao from '../../assets/cifrao.svg';
import imgCreditCard1 from '../../assets/credit-card-1.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { SiderBar } from '../Sidebar/SideBar';
import { Card } from './Card';
import { TransactionTable } from './TransactionTable';


export function DashBoard(){

 const { transactions } = useContext(TransactionsContext);

  var debitAccount = transactions.reduce(( acc, transaction ) => { 
    if (transaction.type === 'Deposito'){
      return acc + transaction.value;
    }
    return acc;
  }, 0); 

  

    return(
            <div className="dashboard">
                <div className="sidebar">
                  <SiderBar/>
                </div>
                <div className="card1">
                  <Card 
                    title="Conta"
                    titleCenter ="Saldo disponível"
                    imageUrl= {imgCifrao}
                    nameImage="Cifrão"
                    debitAccount = {debitAccount}
                    titleFooter="Transações"
                    valueFooter={ 1000 }
                  /> 
                  <Card 
                    title="Cartão de Credito"
                    titleCenter ="Fatura atual"
                    debitAccount = {debitAccount}
                    imageUrl= {imgCreditCard1}
                    nameImage="Cartão de Credito"
                    titleFooter="Limite disponível"
                    valueFooter={ 1000 }
                  />
                </div>
                <div className="card2">
                    <TransactionTable />  
                </div>
            </div>
    )
}


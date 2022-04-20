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

  var summaryAccount = transactions.reduce(( acc, transaction ) => { 
    if (transaction.type === 'Deposito'){
       acc.debitAccount += transaction.value;
       acc.totalTransaction += transaction.value;
    }
    else if (transaction.type === 'Transferência') {
       acc.debitAccount -= transaction.value;
       acc.totalTransaction += transaction.value;
    }
    else if (transaction.type === 'Débito em Conta'){
       acc.debitAccount -= transaction.value;
       acc.totalTransaction += transaction.value;
    }

    else if (transaction.type === 'Cartão de Crédito'){
      acc.creditAccount += transaction.value; 
      acc.creditLimit -= transaction.value;
    }
   
    return acc;
  }, {
    debitAccount: 0,
    creditAccount: 0,
    totalTransaction: 0,
    creditLimit: 1000
  }); 

  

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
                    debitAccount = {summaryAccount.debitAccount}
                    titleFooter="Transações"
                    valueFooter={ summaryAccount.totalTransaction }
                  /> 
                  <Card 
                    title="Cartão de Credito"
                    titleCenter ="Fatura atual"
                    debitAccount = {summaryAccount.creditAccount}
                    imageUrl= {imgCreditCard1}
                    nameImage="Cartão de Credito"
                    titleFooter="Limite disponível"
                    valueFooter={ summaryAccount.creditLimit }
                  />
                </div>
                <div className="card2">
                    <TransactionTable />  
                </div>
            </div>
    )
}


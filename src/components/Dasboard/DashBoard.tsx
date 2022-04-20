import '../../styles/dashboard/dashboard.css';

import { useContext } from 'react';

import imgCifrao from '../../assets/cifrao.svg';
import imgCreditCard1 from '../../assets/credit-card-1.svg';
import { TransactionsContext, TransactionsProvider } from '../../TransactionsContext';
import { SiderBar } from '../Sidebar/SideBar';
import { Card } from './Card';
import { TransactionTable } from './TransactionTable';


export function DashBoard(){

  const { transactions } = useContext(TransactionsContext);

  const totalDebit = transactions.reduce(( acc, transaction ) => { 
    if (transaction.type === 'Deposito'){
      return acc + transaction.value;
    }

    return acc;
  } , 0)

    return(
          <TransactionsProvider>
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
                    debitAccount = {totalDebit}
                    titleFooter="Transações"
                    valueFooter="1000"
                  /> 
                  <Card 
                    title="Cartão de Credito"
                    titleCenter ="Fatura atual"
                    debitAccount = {totalDebit}
                    imageUrl= {imgCreditCard1}
                    nameImage="Cartão de Credito"
                    titleFooter="Limite disponível"
                    valueFooter="1000"
                  />
                </div>
                <div className="card2">
                    <TransactionTable />  
                </div>
            </div>
          </TransactionsProvider>
    )
}


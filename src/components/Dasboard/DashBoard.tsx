import '../../styles/dashboard/dashboard.css';

import imgCifrao from '../../assets/cifrao.svg';
import imgCreditCard1 from '../../assets/credit-card-1.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { SiderBar } from '../Sidebar/SideBar';
import { Card } from './Card';
import { TransactionTable } from './TransactionTable';

export function DashBoard(){

    return(
          <TransactionsContext.Provider value ={[]}>
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
                  /> 
                  <Card 
                    title="Cartão de Credito"
                    titleCenter ="Fatura atual"
                    imageUrl= {imgCreditCard1}
                    nameImage="Cartão de Credito"
                  />
                </div>
                <div className="card2">
                <TransactionTable />  
                </div>
            </div>
          </TransactionsContext.Provider>
    )
}


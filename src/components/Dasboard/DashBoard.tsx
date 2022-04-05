import '../../styles/dashboard/dashboard.css';

import imgCifrao from '../../assets/cifrao.svg';
import imgCreditCard1 from '../../assets/credit-card-1.svg';
import { SiderBar } from '../Sidebar/SideBar';
import { BigCard } from './BigCard';
import { Card } from './Card';

export function DashBoard(){

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
                  /> 
                  <Card 
                    title="Cartão de Credito"
                    titleCenter ="Fatura atual"
                    imageUrl= {imgCreditCard1}
                    nameImage="Cartão de Credito"
                  />
                </div>
                <div className="card2">
                <BigCard />  
                </div>
            </div>
    )
}

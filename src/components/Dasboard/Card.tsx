import '../../styles/dashboard/card.css';

import { formatterValue } from '../../utils/util';

interface CardProps {
  title: string; 
  titleCenter: string;
  debitAccount: number;
  titleFooter: string;
  valueFooter: number;
  nameImage: string;
  imageUrl: string;
}


export function Card(
  {
   imageUrl,
   nameImage,
   title,
   debitAccount,
   titleCenter,
   titleFooter,
   valueFooter
  }:CardProps){
           
    return(
        <div className="card">
          
          <div className="card-header">
            <img src={imageUrl} alt={nameImage}></img>
            <span>{title}</span>
          </div>
          
          <div className="card-body">
            <span className="title">{titleCenter}</span>
            <span className="value">{formatterValue.format(debitAccount)}</span>  
          </div>

          <div className="card-footer">
            <span className="title">{titleFooter}</span>
            <span className="value-footer">{formatterValue.format(valueFooter)}</span>  
          </div>
        
        </div>
    )
}

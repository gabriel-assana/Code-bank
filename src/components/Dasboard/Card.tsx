import '../../styles/dashboard/card.css';

import { formatter } from '../../utils/util';

interface CardProps {
  title: string; 
  titleCenter: string;
  titleFooter: string;
  valueFooter: string;
  nameImage: string;
  imageUrl: string;
}


export function Card({imageUrl,nameImage,title,titleCenter,titleFooter,valueFooter}:CardProps){

    const balances = 1000

    const newBalance = formatter.format(balances)
     
    return(
        <div className="card">
          
          <div className="card-header">
            <img src={imageUrl} alt={nameImage}></img>
            <span>{title}</span>
          </div>
          
          <div className="card-body">
            <span className="title">{titleCenter}</span>
            <span className="value">{newBalance}</span>  
          </div>

          <div className="card-footer">
            <span className="title">{titleFooter}</span>
            <span className="value-footer">{valueFooter}</span>  
          </div>
        
        </div>
    )
}

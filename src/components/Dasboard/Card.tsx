import '../../styles/dashboard/card.css';

interface CardProps {
  title: string; 
  titleCenter: string;
  nameImage: string;
  imageUrl: string;
}


export function Card({imageUrl,nameImage,title,titleCenter}:CardProps){

    const balances = 1000
     
    return(
        <div className="card">
          <div className="card-header">
            <img src={imageUrl} alt={nameImage}></img>
            <span>{title}</span>
          </div>
          <div className="card-body">
            <span className="title">{titleCenter}</span>
                <span className="value">R$:{balances}</span>  
            </div>
        </div>
    )
}

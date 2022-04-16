import '../../styles/dashboard/transactiontable.css';

import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';

interface Transaction {
    id: number;
    description: string;
    value: number;
    type: string;
    createdAt: string;
}

export function TransactionTable () {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  },[])
    
  console.log(transactions)

  return(

    <div className="transactiontable">

        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{transaction.description}</td>
                  <td>R${transaction.value}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

    </div>

  )

}



import '../../styles/dashboard/transactiontable.css';

import React, { useContext, useEffect, useState } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import { formatterDate, formatterValue } from '../../utils/util';

export function TransactionTable () {

    const { transactions } = useContext(TransactionsContext);

    const [transactionList, setTransactionList] = useState(transactions);

    useEffect(() => {
      setTransactionList(transactions);
    }, [transactions]);

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
            {transactionList.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{transaction.description}</td>
                  <td>{ formatterValue.format(transaction.value)}</td>
                  <td>
                    {formatterDate.format(
                        new Date(transaction.createdAt)
                      )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

    </div>

  )

}



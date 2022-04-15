import { createContext, FormEvent, useState } from 'react';





export const TransactionsContext = createContext([]);

export function TransactionsProvider() {
  
    function handleCreateDeposit(event: FormEvent) {
        event.preventDefault();      


    }

    return(
        <TransactionsContext.Provider value={[]}>

        </TransactionsContext.Provider>
    )
}




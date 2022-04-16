import { createContext, FormEvent, useState } from 'react';


export const TransactionsContext = createContext([]);

export function TransactionsProvider() {

    return(
        <TransactionsContext.Provider value={[]}>

        </TransactionsContext.Provider>
    )
}




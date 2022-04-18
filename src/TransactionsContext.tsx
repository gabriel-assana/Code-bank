import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from './services/api';

interface Transaction {
    id: number;
    description: string;
    value: number;
    type: string;
    createdAt: string;
}

type TransactionDeposit = Omit<Transaction, 'id' |'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactionDeposit: (depositData:TransactionDeposit) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData   
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
      api.get('transactions')
        .then(response => setTransactions(response.data))
    },[])

    function createTransactionDeposit(depositData:TransactionDeposit){
    
         api.post('transactions', depositData)
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransactionDeposit}}>
            { children }
        </TransactionsContext.Provider>
    )
}




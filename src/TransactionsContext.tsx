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
type TransactionPayment = Omit<Transaction, 'id' |'createdAt'>;
type TransactionTransfer = Omit<Transaction, 'id' |'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactionDeposit: (depositData:TransactionDeposit) => Promise<void>;
    createTransactionPayment: (paymentData:TransactionPayment) => Promise<void>;
    createTransactionTransfer: (transferData:TransactionTransfer) => Promise<void>;
    
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

    async function createTransactionDeposit(depositData:TransactionDeposit){

        const response = await api.post('transactions', {      
            ...depositData,
            type: "Deposito",
            createdAt: new Date(),
        })

        const newTransactionDeposit = response.data;

        setTransactions([
            ...transactions,
            newTransactionDeposit
        ]);
    }

   async function createTransactionPayment(paymentData:TransactionPayment){
    
        const response = await api.post('transactions', {
            ...paymentData,
            createdAt: new Date()
        })

        const newTransactionPayment = response.data;

        setTransactions([
            ...transactions,
            newTransactionPayment
        ]);

   }

   async function createTransactionTransfer(transferData:TransactionTransfer){
    
        const response = await api.post('transactions', {
            ...transferData,
            createdAt: new Date()
        })

        const newTransactionTransfer = response.data;

        setTransactions([
            ...transactions,
            newTransactionTransfer
        ]);
    }
    

    return(
        <TransactionsContext.Provider 
                value={{ transactions, 
                         createTransactionDeposit,
                         createTransactionPayment,
                         createTransactionTransfer 
                        }}
        >
            { children }
        </TransactionsContext.Provider>
    )
}




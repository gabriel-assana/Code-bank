import './styles/global.css';

import { DashBoard } from './components/Dasboard/DashBoard';
import { TransactionsProvider } from './TransactionsContext';

function App() {

  return (
    <div className="App">
      <main className="container-principal">
      <TransactionsProvider>
        <DashBoard/>
      </TransactionsProvider>
      </main>
    </div>
  );
}

export default App;

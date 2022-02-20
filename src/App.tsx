import './styles/global.css';

import DashBoard from './components/DashBoard';
import SiderBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <header className="container-principal">
        <SiderBar/>
        <DashBoard/>
      </header>
    </div>
  );
}

export default App;

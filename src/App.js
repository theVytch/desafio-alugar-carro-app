
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListVeiculoComponent from './components/ListVeiculoComponent';
import CreateVeiculoComponent from './components/CreateVeiculoComponent';
import UpdateVeiculoComponent from './components/UpdateVeiculoComponent';
import ViewVeiculoComponent from './components/ViewVeiculoComponent';

import ListVeiculoAlugadoComponent from './components/ListVeiculoAlugadoComponent ';
import CreateAlugarVeiculoComponent from './components/CreateAlugarVeiculoComponent';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path="/Veiculos" component={ListVeiculoComponent}></Route>
              <Route path="/insert-veiculo" component={CreateVeiculoComponent}></Route>
              <Route path="/update-veiculo/:id" component={UpdateVeiculoComponent}></Route>
              <Route path="/view-veiculo/:id" component={ViewVeiculoComponent}></Route>

              <Route path="/AlugarVeiculos" component={ListVeiculoAlugadoComponent}></Route>
              <Route path="/insert-alugarVeiculo/:id" component={CreateAlugarVeiculoComponent}></Route>
              
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

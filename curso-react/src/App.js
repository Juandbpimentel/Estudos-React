import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/empresa">
          <Empresa/>
        </Route>
        <Route exact path="/contato">
          <Contato/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

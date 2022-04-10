import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Company from './components/Pages/Company';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import NewProject from './components/Pages/NewProject';

import Container from './components/layout/Container';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Projects from './components/Pages/Projects';
function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home/> 
          </Route>
          <Route exact path="/contact">
            <Contact/> 
          </Route>
          <Route exact path="/company">
            <Company/> 
          </Route>
          <Route exact path="/newproject">
            <NewProject/> 
          </Route>
          <Route exact path="/projects">
            <Projects/> 
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

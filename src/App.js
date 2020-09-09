import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
    <div className="App">
    
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

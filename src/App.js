import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Product from './components/Product';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Login from './components/Login/Login';
import Insert from './components/Login/Insert';
import View from './components/Login/View';
import Edit from './components/Login/Edit';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/insert" component={Insert} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/view" component={View} />
        <Route component={Default} />
      </Switch>

      <Modal />

    </React.Fragment>
  );
}

export default App;

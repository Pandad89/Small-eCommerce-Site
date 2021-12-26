import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

const Home = () => {
  return (
    <div>
      <div className='Body'>
        <h1>Hello and welcome to the main page</h1>
      </div>
    </div>
  )
}
const Clothes = () => {
  return (
    <div>
      <div className='Body'>
        <div className='Item'>Item A</div>
        <div className='Item'>Item B</div>
        <div className='Item'>Item C</div>
        <div className='Item'>Item D</div>
        <div className='Item'>Item E</div>
        <div className='Item'>Item F</div>
        <div className='Item'>Item G</div>
        <div className='Item'>Item H</div>
        <div className='Item'>Item I</div>
        <div className='Item'>Item J</div>
        <div className='Item'>Item K</div>
        <div className='Item'>Item L</div>
      </div>
    </div>
  )
}
const Pets = () => {
  return (
    <div>
      <div className='Body'>
        <h1>Welcome to the Pets page</h1>
      </div>
    </div>
  )
}
const Furniture = () => {
  return (
    <div>
      <div className='Body'>
        <h1>Welcome to the furniture page</h1>
      </div>
    </div>
  )
}
const Electronics = () => {
  return (
    <div>
      <div className='Body'>
        <h1>Welcome to the electronics page</h1>
      </div>
    </div>
  )
}
const Cart = () => {
  return (
    <div>
      <div className='Body'>
        <h1>Welcome to the cart page</h1>
      </div>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="Navbar">
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/clothes">
              <h2>Clothes</h2>
            </Link>
            <Link to="/pets">
              <h2>Pets</h2>
            </Link>
            <Link to="/furniture">
              <h2>Furniture</h2>
            </Link>
            <Link to="/electronics">
              <h2>Electronics</h2>
            </Link>
            <Link to="/cart">
              <h3 className='Cart'>Cart</h3>
            </Link>
          </div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/clothes" exact component={Clothes} />
            <Route path="/pets" exact component={Pets} />
            <Route path="/furniture" exact component={Furniture} />
            <Route path="/electronics" exact component={Electronics} />
            <Route path="/cart" exact component={Cart} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;

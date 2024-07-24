import logo from './logo.svg';
import './App.css';
import React from 'react';
import CartTable from "./components/CartTable";
import PromoCode from "./components/PromoCode";
import CheckOut from "./components/CheckOut";
import Recommended from "./components/Recommended";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <main className="App-header">
        <div class="container mt-4">
          <div class="row">
            <div class="col-9">
              <CartTable></CartTable>
            </div>
            <div class="col">
              <PromoCode />
              <br />
              <CheckOut />
            </div>
          </div>
          <Recommended></Recommended>
        </div>
      </main>
    </div>
  );
}

export default App;

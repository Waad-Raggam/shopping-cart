import logo from './logo.svg';
import './App.css';
import React from 'react';
import CartTable from "./components/CartTable";
import PromoCode from "./components/PromoCode";
import CheckOut from "./components/CheckOut";


function App() {
  return (
    <div className="App">

      <main className="App-header">
        <div class="container">
          <div class="row">
            <div class="col-9">
              <CartTable></CartTable>
            </div>
            <div class="col">
              <PromoCode />
              <br/>
              <CheckOut/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

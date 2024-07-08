import logo from './logo.svg';
import './App.css';
import React from 'react';
import CartTable from "./components/CartTable";


function App() {
  return (
    <div className="App">
     
      <main className="App-header">
        <CartTable></CartTable>
      </main>
    </div>
  );
}

export default App;

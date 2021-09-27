import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import FilterList from './components/FilterList';
import Products from './components/Products';
import Sizes from './components/Sizes';

const App = () => {
  const [products, setProducts] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [cart, setCart] = useState([]);

  const sortProducts = (method) => {
    const array = products;
    if (method === "Lowest to Highest") {
      array.sort((a, b) => {
        return a.price - b.price;
      })
    } else if (method === "Highest to Lowest") {
      array.sort((a, b) => {
        return a.price - b.price;
      })
    }
    setProducts(array)
  }
  return (
    <div className="App">
      <Cart />
      <Products />
      <FilterList />
      <Sizes />

    </div>
  );
}

export default App;
// CTRL+B ---------------> ToogleSideBar
// CTRL+` ---------------> Open Terminal
//CTRL , ----------------> Open Settings Panel
//CTRL+p------------------> open file
// CTRL+Tab --------------> go through the file
//CTRL+\ -----------------> open split vscode files
// CTRL+w ---------------> closing the files
// CTRL+t ----------------> open a new tab
// CTRL+f ---------------->Search and replace 
// CTRL+Shift+f------------>Global search and replace 
// CTRL+p ----------------> top files open in
// CTRL+shift+p-----------> write cmd on top 
// shift+ mouseover----------> from left to right navigate



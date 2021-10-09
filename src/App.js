import React, { useState, useEffect } from 'react';
import './App.css';
// import { UseState2 } from './UseState/UseState2';
// import { UseState1 } from './UseState/UseState1';
// import Cart from './components/Cart';
// import FilterList from './components/FilterList';
// import Products from './components/Products';
// import Sizes from './components/Sizes';

const App = () => {
  // const [products, setProducts] = useState([])
  // const [selectedSizes, setSelectedSizes] = useState([]);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   setProducts(FilterList([], null));
  //   if (JSON.parse(localStorage.getItem('cart'))) {
  //     setCart(JSON.parse(localStorage.getItem('cart')))
  //   }
  // }, [])
  // const setSize = (size) => {
  //   const sizes = [...selectedSizes]
  //   if (sizes.includes(size)) {
  //     const index = sizes.indexOf(size)
  //     sizes.splice(index, 1)
  //   }
  //   else {
  //     sizes.push(size)
  //   }
  //   setSelectedSizes(sizes)
  //   setProducts(FilterList(sizes, 'size'))
  // }

  // const sortProducts = (method) => {
  //   const array = products;
  //   if (method === "Lowest to Highest") {
  //     array.sort((a, b) => {
  //       return a.price - b.price;
  //     })
  //   } else if (method === "Highest to Lowest") {
  //     array.sort((a, b) => {
  //       return a.price - b.price;
  //     })
  //   }
  //   setProducts(array)
  // }
  // const addToCart = (item) => {
  //   const productList = [...cart];
  //   if (!productList.includes(item)) {
  //     productList.push(item)
  //   }
  //   const index = productList.indexOf(item)
  //   productList[index].quantity++;
  //   setCart(productList);
  //   localStorage.setItem('cart', JSON.stringify(productList))
  // }
  // const changeQuantity = (item, e) => {
  //   const productList = [...cart];
  //   const index = productList.indexOf(item);
  //   if (e === "+") {
  //     productList[index].quantity++;
  //   } else {
  //     if (productList[index].quantity > 1) {
  //       productList[index].quantity--
  //     } else {
  //       productList.splice(index, 1)
  //     }
  //   }
  //   setCart(productList)
  //   localStorage.setItem('cart', JSON.stringify(productList))
  // }
  return (
    <div className="App">
      {/* <Sizes selectedSizes={selectedSizes} setSize={setSize} />
      <Products products={products} sortProducts={sortProducts} />
      <Cart products={cart} changeQuantity={changeQuantity} /> */}
      {/* <UseState1 /> */}
      {/* <UseState2 /> */}
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



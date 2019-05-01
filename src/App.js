import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [products, setProducts] = useState({});
  const url = 'data/products.json';

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      console.log(json);
      setProducts(json.products);
    }
    fetchProducts();
  }, [])

  return (
    <div className="App">
      <ul>
        {Object.entries(products).map(e => <li>{e[1].title}</li>)}
      </ul>
    </div>
  );
}

export default App;

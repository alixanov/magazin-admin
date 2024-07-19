import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from '../../page/Login/Login';
import Card from '../Card/Card';
import Report from '../../page/report/Report';
import AddProductForm from '../../page/admin-panel/AddProductForm';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://669a7ba49ba098ed61ffcfbc.mockapi.io/magazin')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addProduct = (product) => {
    // This function adds a new product to the state
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    // This function deletes a product from the API and updates the state
    axios.delete(`https://669a7ba49ba098ed61ffcfbc.mockapi.io/magazin/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/card' element={<Card />} />
        <Route path='/addformproduct' element={<AddProductForm addProduct={addProduct} />} />
        <Route path='/report' element={<Report products={products} deleteProduct={deleteProduct} />} />
      </Routes>
    </div>
  );
};

export default Main;

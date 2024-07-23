import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from '../../page/Login/Login';
import Card from '../Card/Card';
import Report from '../../page/report/Report';
import AddProductForm from '../../page/admin-panel/AddProductForm';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

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
    if (editingProduct) {
      axios.put(`https://669a7ba49ba098ed61ffcfbc.mockapi.io/magazin/${product.id}`, product)
        .then(response => {
          setProducts(products.map(p => p.id === product.id ? response.data : p));
          setEditingProduct(null);
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    } else {
      axios.post('https://669a7ba49ba098ed61ffcfbc.mockapi.io/magazin', product)
        .then(response => {
          setProducts([...products, response.data]);
        })
        .catch(error => {
          console.error('Error adding product:', error);
        });
    }
  };

  const deleteProduct = (id) => {
    axios.delete(`https://669a7ba49ba098ed61ffcfbc.mockapi.io/magazin/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/card' element={<Card />} />
        <Route path='/addformproduct' element={<AddProductForm addProduct={addProduct} editingProduct={editingProduct} />} />
        <Route path='/report' element={<Report products={products} deleteProduct={deleteProduct} editProduct={editProduct} />} />
      </Routes>
    </div>
  );
};

export default Main;

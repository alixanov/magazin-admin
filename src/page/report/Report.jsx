import React from 'react';
import './report.css';

const Report = ({ products, deleteProduct }) => {
  return (
    <div className="report-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            className="product-image"
            src={product.img[0]?.trim() ||'https://via.placeholder.com/350x200?text=No+Image'}
            alt={product.titleProduct}
          />
          <div className="product-content">
            <div className="product-header">
              <img className="product-avatar" src={product.swiperuchun} alt={product.titleProduct} />
              <h5 className="product-title">{product.titleProduct}</h5>
            </div>
            <p className="product-description">{product.mahsulotnomi}</p>
            <p className="product-description">{product.nameproduct}</p>
            <p className="product-price">Цена: ${product.price}</p>
            <p className="product-info">{product.productinfo}</p>
            <p className="product-quantity">Количество оставшихся: {product.nechtaqolgani}</p>
            <button className="delete-button" onClick={() => deleteProduct(product.id)}>
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Report;

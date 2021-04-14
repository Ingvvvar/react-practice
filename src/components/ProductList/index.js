import React from 'react';
import useData from '../../custom-hooks/useData';
import { useParams } from 'react-router';


const ProductList = () => {

  const { products } = useParams();

  const data = useData(products);

  return (
    <>
      {data?.map(restaurant => {
        const { id, description, image, name, price } = restaurant;

        const src = require(`../../assets/${image}`).default

        return (<li key={id} className="card card-restaurant" >
          <img src={src} alt="image" className="card-image" />
          <div className="card-text">
            <div className="card-heading">
              <h3 className="card-title card-title-reg">{name}</h3>
            </div>
            <div className="card-info">
              <div className="ingredients">{description}</div>
            </div>
            <div className="card-buttons">
              <button className="button button-primary button-add-cart">
                <span className="button-card-text">В корзину</span>
                <span className="button-cart-svg"></span>
              </button>
              <strong className="card-price-bold card-price">{price} UAH</strong>
            </div>
          </div>
        </li>
        )
      })}
    </>
  )
}

export default ProductList;
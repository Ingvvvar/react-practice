import React from 'react';
import useData from '../../custom-hooks/useData';
import Spinner from '../Spinner';


const RestaurantList = () => {

    const data = useData('partners');

    if(!data) {
        return <Spinner />
    }

    return (
        <section className="restaurants">

            <div className="section-heading">
                <h2 className="section-title">Рестораны</h2>
                <label className="search">
                    <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
                </label>
            </div>

            <ul className="cards cards-restaurants">
                {data?.map(restaurant => {
                    const { kitchen, image, name, price, products, stars, time_of_delivery} = restaurant;

                    const src = require(`../../assets/${image}`).default;

                    const click = () => console.log(products)
                    
                   
                    return (<li key={products} className="card card-restaurant" onClick={click}>
                                <img src={src} alt={src} className="card-image" />
                                <div className="card-text">
                                    <div className="card-heading">
                                    <h3 className="card-title">{name}</h3>
                                    <span className="card-tag tag">{time_of_delivery} мин</span>
                                    </div>
                                    <div className="card-info">
                                    <div className="rating">
                                        {stars}
                                    </div>
                                    <div className="price">От {price} UAH</div>
                                    <div className="category">{kitchen}</div>
                                    </div>
                                </div>
                    </li>)
                })}
            </ul>

        </section>
    )
}

export default RestaurantList;
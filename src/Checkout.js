import React from 'react';
import './Checkout.css';


import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';


export default function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className = "checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://salesfunnelhq.com/wp-content/uploads/2018/07/AdBadger_Banner_Ads_06-1024x225.png"
                    alt="amazone checkout banner"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2> 
                    {/* CheckoutProduct */}
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

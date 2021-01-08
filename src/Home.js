import React from 'react';
import './Home.css';
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"  alt=" banner" />
                <div className="home__row">
                    <Product
                        id="1001"
                        title="the lorem ipsum gkybhsd"
                        price="30.35"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1002"
                        title="Apple Lightning Cable [3Pack-6FT] iPhone Charger Cable Apple MFi Certified iPhone Charger 11 Pro Xs MAX XR X iPad air pro 8 7 Plus car Charge"
                        price="18.35"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                        rating={5}
                    />
                    
                </div>
                <div className="home__row">
                    <Product 
                        id="1003"
                        title="tning Cable [3Pack-6FT] iPhone Charger Cable Apple MFi Certified iPhone Charger 11 Pro Xs MAX XR X iPad air pro 8 7 Plus car Charger Charging Cable Cord Fast Long US"
                        price="18.35"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="1004"
                        title="Apple Lightning Cable [3Pack-6FT]  7 Plus car ng Cable Cord Fast Long US"
                        price="12.35"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
                        rating={2}
                    />
                    <Product 
                        id="1005"
                        title="the lorem ipsumApple Lightning Cable [3Pack-6FT] Cable Cord Fast Long US"
                        price="25.35"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                        rating={3}
                    />
                    
                    
                </div>
                <div className="home__row">
                    <Product 
                        id="1006"
                        title="Apple Lightning Cable [3Pack-6FT] iPhone Charger Cable Apple MFi Certified iPhone Charger 11 Pro Xs MAX XR X iPad air pro 8 7 Plus car Charger Charging Cable Cord Fast Long US the lorem ipsum bla bla upsumm"
                        price="25.35"
                        image="https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

import React from "react";
import  ReactDOM from "react-dom/client";

//making a header component/ functional component-react component
/**
 * logo inside header div
 * navigation bar
 */

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"></img>
            </div>

            <div className="navigation-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Offers</li>
                      <li>Cart</li>
                </ul>

            </div>
    </div>
);

/**
 * Restaurant card
 * -img
 * -name of restro
 * star rating with time
 * about the food, whether it is chinese or indian etc.
 */
//making a restaurant card component to reuse it again and again
const RestaurantCard = (props) => (
    <div className="res-card">
        <img className="res-img"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e4wujbtpzue93pz3fnrm">

        </img>
    <h3>{props.resName}</h3>
    <h4>{props.rating}</h4>
    <h4>{props.time}</h4>
    <h4>{props.cuisine}</h4>
    </div>
);


//making a body
//making dynamic  restaurant card 

const Body = () => (
<div className="body">
    <div className="search">
        search
    </div>

    <div className="restaurant-container">
    <RestaurantCard
    resName = "Meghana Foods" rating="4.7" time = "50-55 mins"
    cuisine = "Biryani, North Indian" />

<RestaurantCard 
resName = "KFC" rating="4.4" time = "25-30 mins"
    cuisine = "Burger, Fries, Fried Chicken"/>

    </div>
</div>
)

//making a app layout component/ react componenet

const AppLayout = () => (
    <div className="app">
        {Header()}
        {Body()}

    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


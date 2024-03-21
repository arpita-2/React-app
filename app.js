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
            <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"></img>
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

//making a app layout component/ react componenet

const AppLayout = () => (
    <div className="app">
        {Header()}

    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


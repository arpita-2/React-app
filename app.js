import React from "react";
import  ReactDOM from "react-dom/client";

//react.createElement => object => HTML element (rendering)
//jSX .................JSX is just a syntax but react element is an object
//jsx => react.createElement => Html element

const jsxHeading = <h1 id="heading">Hello world!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
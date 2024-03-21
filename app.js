import React from "react";
import  ReactDOM from "react-dom/client";

//react.createElement => object => HTML element (rendering)
//jSX .................JSX is just a syntax but react element is an object
//jsx => react.createElement => Html element

const jsxHeading = <h1 id="heading">Hello world!</h1>;
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

//React functional component
//making another component and trying to render in headingComponent
//component composition
const Apple = () => (
    <h2>Apple is red in color
</h2>
);

const HeadingComponent = () => (
    <div id="container">
        <Apple />
        <h1>Namaste React</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />);
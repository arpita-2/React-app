import React from "react";
import  ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id : "heading"}, "Hello world from React");
//so basically the work of react is to create element which is we know is the core element

    const root = ReactDOM.createRoot(document.getElementById("root"));
    //here we use reactdom because we have to put the element in the browser or we can say in the root
    root.render(heading);

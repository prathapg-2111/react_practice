import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1",{},"I am the h1 tag"),
        React.createElement("h2",{},"I am the h2 tag at the middle by Prathap")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1",{},"I am the h1 child2 tag"),
        React.createElement("h2",{},"I am the h2 child2 tag")]
    )]
);


const heading = React.createElement(
    "h1",
    {id:"heading", xyz:"abc"},
    "Hello World from React!"
);

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
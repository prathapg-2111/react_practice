/*
* <div id="parent">
*      <div id="child">    
*         <h1>I'm the h1 tag</h1>
          <h2>I'm the h2 tag</h2>
*       </div>
* <div id="child2">    
*         <h1>I'm the h1 tag</h1> => jSX can be used to avoid multiple nested child tags 
*          <h2>I'm the h2 tag</h2> => JSX will make the life easy for creating the react tags , 
*                                        eliminating the usage of createElement
*       </div>
* </div>
*
*
* ReactElement(Object) => HTML{} that the browser understands
*/

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1",{},"I am the h1 tag"),
        React.createElement("h2",{},"I am the h2 tag")]
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

console.log(parent); // heading will return an object tag

const root = ReactDOM.createRoot(document.getElementById("root"));
//Render method is responsible to convert the object to h1 tag and render on the page
root.render(parent);
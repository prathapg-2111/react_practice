import React from "react";
import ReactDOM from "react-dom/client";


// React element is not a html element
//React.createElement => object,  when we render this element on to DOM,
//it will become html element
const heading = React.createElement(
    "h1",
    {id:"Heading"},
    "This is Prathap from React"
);
console.log(heading);

//const jsxHeading = <h1 id="heading">This is prathap from JSX</h1>;
const jsxHeading = (<h1 className="head" tabIndex="1">
    This is Prathap from JSX
    </h1>);

const Title = () => (
    <h1 className="head" tabIndex="1">
    This is Prathap from JSX Title component
    </h1>
);

const elem = <span>React element</span>

const fn = () => true;

//React functional component
const HeadingComponent = () => {
    return <h1>This is Prathap from React funtional component</h1>
};

const HeadingComponent1 = () => (
<div id="container">
    <Title />
    {Title()}
    <Title></Title>
<h1>This is Prathap from React funtional component1</h1>
</div>
);


console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(jsxHeading);
root.render(<HeadingComponent1 />);

/*

<div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
</div>

*/


const heading = React.createElement(

    "div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "headingcolor" }, "I am h1 tag"),
        React.createElement("h2", { id: "headingcolor2" }, "I am h2 tag")
    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "headingcolor1" }, "I am h1 tag"),
        React.createElement("h2", { id: "headingcolor22" }, "I am h2 tag")
    ])
]

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(root);
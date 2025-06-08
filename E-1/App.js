/*
    <div id="parent">
        <div id="child">
            <h1>I'm a h1 tag</h1>
            <h2>I'm a h2 tag</h2>
        </div>
        <div id="child"2>
            <h1>I'm a h1 tag</h1>
            <h2>I'm a h2 tag</h2>
        </div>
    </div>


*/

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])
])
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );
// console.log(heading);   // object ( not a h1 tag )
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);   // (render method converts object to h1 tag)
root.render(parent);
// whatever is there in the root, will get replaced by the parent, not appended

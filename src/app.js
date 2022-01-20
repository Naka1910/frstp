import React from 'react';
import React from 'react-dom';



const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Maltesse",
    }),
    React.createElement(Pet, { name: "Sesi", animal: "Cat", breed: "Brcat" }),
    React.createElement(Pet, { name: "Londa", animal: "Dog", breed: "york" }),
  ]);

};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

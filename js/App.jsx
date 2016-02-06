import React from 'react';
import ReactDOM from 'react-dom';
import Relay from "react-relay";
import Main from "./Main.jsx";

ReactDOM.render(<Main />,document.getElementById('react'));

console.log(
  Relay.QL`
    query Test{
      links{
        title
      }
    }
  `
);



// var React = require('react');
// var ReactDOM = require('react-dom');

// let Hello = React.createClass({
//   render: function() {
//     return <h1>Hello Senthil! Welcome to react</h1>;
//   }
// });



// export default class Hello extends React.Component {
//   render() {
//     return (<h1>Hello Senthil! Welcome...</h1>);
//   }
// }
//


// var Hello = React.createClass({
//
//   render: function() {
//     return React.createElement("h3",null,"Hello React!!");
//   }
//
// });
//
// ReactDOM.render(React.createElement(Hello), document.getElementById('react'));

import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';
import bee from './bee';
const data = [{
  id: '1',
  topic: 'Bee Movie Script',
  content: bee
},
{
  id: '2',
  topic: 'Cascading Style Sheets',
  content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
},
{
  id: '3',
  topic: 'JavaScript',
  content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
}
];

ReactDOM.render(
  <Accordion data={data}/>,
  document.querySelector('#root')
);

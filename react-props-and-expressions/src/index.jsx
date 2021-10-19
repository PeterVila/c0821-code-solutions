import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
    <button>{props.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="Hello" />
    <CustomButton text="World" />
    <CustomButton text="But in React" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);

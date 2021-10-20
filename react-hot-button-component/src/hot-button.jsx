import React from 'react';
class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { isClicked: prevState.isClicked + 1 };
    });
    console.log(this.state.isClicked);
  }

  render() {
    if (this.state.isClicked > 3 && this.state.isClicked < 6) {
      return <button className="dark-purple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked > 6 && this.state.isClicked < 9) {
      return <button className="light-purple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked > 9 && this.state.isClicked < 12) {
      return <button className="red-orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked > 12 && this.state.isClicked < 15) {
      return <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked > 15 && this.state.isClicked < 18) {
      return <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked > 18) {
      return <button className="white" onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

export default HotButton;

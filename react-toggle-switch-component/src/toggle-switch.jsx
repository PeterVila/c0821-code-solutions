import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <div className="slider-on">
            <div className="ball-on" onClick={this.handleClick}></div>
          </div>
         <h1>ON</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div className="slider-off">
            <div className="ball-off" onClick={this.handleClick}></div>
          </div>
         <h1>OFF</h1>
        </div>
      );
    }
  }
}

export default ToggleSwitch;

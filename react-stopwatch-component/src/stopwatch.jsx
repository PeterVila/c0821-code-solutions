import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  startTime() {
    this.countdown = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  pauseTime() {
    clearInterval(this.countdown);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
    if (this.state.isClicked) {
      this.pauseTime();
    } else {
      this.startTime();
    }
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className="container">
          <div className="circle"><h1>{this.state.seconds}</h1></div>
          <i onClick={this.handleClick} className="fas fa-pause"></i>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="circle"><h1>{this.state.seconds}</h1></div>
          <i onClick={this.handleClick} className="fas fa-play"></i>
        </div>
      );
    }
  }
}

export default Stopwatch;

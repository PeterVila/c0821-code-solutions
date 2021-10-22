import React from 'react';

class AppDrawer extends React.Component {
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
    if (!this.state.isClicked) {
      return (
        <div>
        <div>
            <i onClick={this.handleClick} className="fas fa-bars"></i>
            <div className="backdrop"></div>
            <div className="nav-slider hide-nav">
              <h3>Choose a Game</h3>
              <ul>
                <li onClick={this.handleClick}>The Legend Of Zelda</li>
                <li onClick={this.handleClick}>A Link to the Past</li>
                <li onClick={this.handleClick}>Ocarina of Time</li>
                <li onClick={this.handleClick}>The Wind Waker</li>
                <li onClick={this.handleClick}>Breath of the Wild</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        <div className="nav-background">
            <i onClick={this.handleClick} className="fas fa-bars"></i>
            <div onClick={this.handleClick} className="backdrop"></div>
            <div className="nav-slider show-nav">
              <h3>Choose a Game</h3>
              <ul>
                <li onClick={this.handleClick}>The Legend Of Zelda</li>
                <li onClick={this.handleClick}>A Link to the Past</li>
                <li onClick={this.handleClick}>Ocarina of Time</li>
                <li onClick={this.handleClick}>The Wind Waker</li>
                <li onClick={this.handleClick}>Breath of the Wild</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;

import React from 'react';
import ReactDOM from 'react-dom';
class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      // updater function form
      isClicked: !prevState.isClicked
    }));
    // Sets its once
    // this.setState({ isClicked: true });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Click Me!' : 'Thanks'}
      </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);

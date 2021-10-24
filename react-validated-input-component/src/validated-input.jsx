import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let read = null;
    let icon = null;
    if (this.state.password.length === 0) {
      read = 'A password is required';
      icon = 'bad fas fa-times';
    } else if (this.state.password.length > 0 && this.state.password.length < 8) {
      read = 'Your password is too short';
      icon = 'bad fas fa-times';
    } else {
      read = null;
      icon = 'good fas fa-check';
    }
    return (
        <div>
          <h3>Password</h3>
          <input type="password" value={this.state.value} onChange={this.handleChange} />
          <i className={icon}></i>
        <div><p>{read}</p></div>
        </div>
    );
  }
}

export default ValidatedInput;

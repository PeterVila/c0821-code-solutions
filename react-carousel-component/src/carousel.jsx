import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.selectIndex = this.selectIndex.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.moveRight(), 3000);
  }

  moveLeft() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 3000);
    if (this.state.index <= 1) {
      this.setState({ index: this.props.data.length });
    } else {
      this.setState(prevState => ({
        index: prevState.index - 1
      }));
    }
  }

  moveRight() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 3000);
    if (this.state.index >= this.props.data.length) {
      this.setState({ index: 1 });
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }
  }

  selectIndex(event) {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 3000);
    const id = parseInt(event.target.id);
    this.setState({ index: id });
  }

  render() {
    const data = this.props.data;
    return (
      <div className="container">
        <div className="row">
          <div className="left side-buttons">
            <i className="fas fa-chevron-left" onClick={this.moveLeft}></i>
          </div>
          <div className="middle">
            <div className="title">
              <h1>Characters That Shouldve Been on the Smash Roster</h1>
            </div>
            <div className="photo">
          {data.map(image => {
            return (this.state.index === image.id && (
                <img key={image.id} className='image' src={image.url} alt={image.id} />
            ));
          })}
            </div>
            <div className="orb">
              {data.map(image => {
                return (this.state.index === image.id
                  ? (<i id={image.id} key={image.id} className="fas fa-circle" onClick={this.selectIndex}></i>)
                  : (<i id={image.id} key={image.id} className="far fa-circle" onClick={this.selectIndex}></i>)
                );
              })}
            </div>
          </div>
          <div className="right side-buttons">
            <i className="fas fa-chevron-right" onClick={this.moveRight}></i>
          </div>
        </div>
      </div>
    );
  }
}

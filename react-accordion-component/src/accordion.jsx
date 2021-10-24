import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target.id;
    if (this.state.opened === target) {
      this.setState({ opened: null });
    } else {
      this.setState({ opened: target });
    }
  }

  render() {
    const data = this.props.data;
    return (
      <div className="accordion">
        {data.map(topic => (
          <div key={topic.id} onClick={this.handleClick}>
            <div id={topic.id} className="topic">{topic.topic}</div>
            {this.state.opened === topic.id &&
            <div className='content'>
              {topic.content}
            </div>
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;

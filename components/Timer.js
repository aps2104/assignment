import React from 'react'
import ReactDOM from 'react-dom'

export default class Timer extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {displayTime: null};
	}
  
	componentDidMount() {
	  this.timerID = setInterval(
		() => this.tick(),
		1000
	  );
	}
  
	componentWillUnmount() {
	  clearInterval(this.timerID);
	}
  
	tick() {
	  this.setState({
		displayTime: this.props.formatter(this.props.timeStamp)
	  });
	}
  
	render() {
	  return (
		  <span key={this.props.timeStamp}>{this.state.displayTime}</span>
	  );
	}
  }
  

import React from 'react'
import ReactDOM from 'react-dom'
import './FlightDetails.css'

import FaCircleO from 'react-icons/lib/fa/circle-o'


class FlightDuration extends React.Component {

    render() {
		return (
			<div className='flight-duration-details'>
		
			{(this.props.source === 'flight-option' && this.props.hasStop ) ? 
			<div>
			 <div className="lower-txt center">{this.props.duration}</div>
				<div className="lower-row center">
						<FaCircleO size={10}/>
						<span className="line"></span>
						<i className="far fa-circle"></i>
						<span className="line"></span>
						<FaCircleO size={10}/>
				</div>
			</div> : 	
				<div className="upper-row center">
						<FaCircleO size={10}/>
						<span className="time-txt">{this.props.duration}</span>
						<FaCircleO size={10}/>
			</div> }
			</div>
			)
		}
	}

export default FlightDuration;
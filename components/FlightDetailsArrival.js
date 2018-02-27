import React from 'react'
import ReactDOM from 'react-dom'
import FlightOptions from './FlightOptions'
import BaggageInformation from './BaggageInformation'
import { connect } from 'react-redux';
import { setReturn } from '../actions/flight';
import './FlightDetails.css'

class FlightDetailsArrival extends React.Component {
    render() {
		return (
				<div className='return-details' style={{display:'inline-block', width:'50%'}}> Return
				<div className='header'>
						<p>{this.props.returnFlight.from} to {this.props.returnFlight.to}</p>
					</div>
					<div className='flight-number'>
						{this.props.returnFlight.airline}  {this.props.returnFlight.flight_number}
					</div>
					<div className='flight-details'>
					<div style={{display:'inline-block', width:'50%'}}>
						<p>{this.props.returnFlight.sourceCode}  <b>{this.props.returnFlight.departureTime}</b></p>
						<p><b>{this.props.returnFlight.timeRange[0]}</b></p>
						<p>{this.props.returnFlight.from} </p>
					</div>
					<div className='connector-line'> {this.props.returnFlight.duration} </div>
					<div className='destination' style={{display:'inline-block', width:'50%'}}>
						<p>{this.props.returnFlight.destinationCode}  <b>{this.props.returnFlight.arrivalTime}</b></p>
						<p><b>{this.props.returnFlight.timeRange[1]}</b></p>
						<p>{this.props.returnFlight.to}</p>
					</div>
					</div>
					<BaggageInformation/>
					<FlightOptions source='return'/>
				</div>
			)
		}
    }
function mapStateToProps ({flights}) {
  return {
	returnFlight : flights.returnFlight
  }
}

function mapDispatchToProps (dispatch) {
	return {
		doSetReturn : (index) => {
			dispatch(setReturn(index))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetailsArrival)
import React from 'react'
import ReactDOM from 'react-dom'
import FlightOptions from './FlightOptions'
import BaggageInformation from './BaggageInformation'
import { connect } from 'react-redux';
import { setReturn } from '../actions/flight';
import TiArrowLeft from 'react-icons/lib/ti/arrow-left'
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o'
import './FlightDetails.css'


class FlightDetailsArrival extends React.Component {
    render() {
		return (
				<div className='return-details' style={{display:'inline-block', width:'50%'}}> 
				<TiArrowLeft size={40}/><span className='h5'>Return</span>
				<div className='header'>
						<p className='h5'>{this.props.returnFlight.from} to {this.props.returnFlight.to}</p>
					</div>
					<div className='flight-number'>
					<FaPaperPlaneO size={60}/>
					<div className='text-muted'>{this.props.returnFlight.airline}  {this.props.returnFlight.flight_number}</div>
					</div>
					<div className='flight-details'>
					<div style={{display:'inline-block', width:'50%'}}>
						<p>{this.props.returnFlight.sourceCode}  <b>{this.props.returnFlight.departureTime}</b></p>
						<p><b>{this.props.returnFlight.timeRange[0]}</b></p>
						<p>{this.props.returnFlight.from} </p>
					</div>
					<span className='connector-line'> {this.props.returnFlight.duration} </span>
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
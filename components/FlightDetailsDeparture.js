import React from 'react'
import ReactDOM from 'react-dom'
import FlightOptions from './FlightOptions'
import BaggageInformation from './BaggageInformation'
import { connect } from 'react-redux';
import { setDeparture } from '../actions/flight';
import TiArrowRight from 'react-icons/lib/ti/arrow-right'
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o'
import FlightDuration from './FilightDuration'
import './FlightDetails.css'


class FlightDetailsDeparture extends React.Component {

    render() {
		return (
				<div className='departure-details' style={{display:'inline-block', width:'50%'}}> 
				<TiArrowRight size={40}/><span className='h5'>Departure</span>
				<div className='header'>
						<p className='h5'>{this.props.departureFlight.from} to {this.props.departureFlight.to}</p>
					</div>
					<div className='flight-number'>
						<FaPaperPlaneO size={50}/>
						<div className='text-muted'>{this.props.departureFlight.airline}  {this.props.departureFlight.flight_number}</div>
					</div>
					<div className='flight-details'>
						<div style={{display:'inline-block', width:'35%'}}>
							<p>{this.props.departureFlight.sourceCode}  <b>{this.props.departureFlight.departureTime}</b></p>
							<p><b>{this.props.departureFlight.timeRange[0]}</b></p>
							<p>{this.props.departureFlight.from} </p>
						</div>
					
						<FlightDuration duration ={this.props.departureFlight.duration}/>
						<div className='destination' style={{display:'inline-block', width:'35%'}}>
							<p>{this.props.departureFlight.destinationCode}  <b>{this.props.departureFlight.arrivalTime}</b></p>
							<p><b>{this.props.departureFlight.timeRange[1]}</b></p>
							<p>{this.props.departureFlight.to}</p>
						</div>
					</div>
					<BaggageInformation/>
					<FlightOptions source='departure'/>
				</div>
			)
		}
    }
function mapStateToProps ({flights}) {
  return {
	departureFlight: flights.departureFlight,
  }
}

function mapDispatchToProps (dispatch) {
  return {
	  doSetDeparture : (index) => {
		  dispatch(setDeparture(index))
	  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetailsDeparture)
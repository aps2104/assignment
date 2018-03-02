import React from 'react'
import ReactDOM from 'react-dom'
import FlightOptions from './FlightOptions'
import BaggageInformation from './BaggageInformation'
import { connect } from 'react-redux';
import TiArrowLeft from 'react-icons/lib/ti/arrow-left'
import FlightOptionInformation from './FlightOptionInformation'
import './FlightDetails.css'


class FlightDetailsArrival extends React.Component {
    render() {
		return (
				<div className='return-details' style={{display:'inline-block', width:'50%'}}> 
				<TiArrowLeft size={40}/><span className='h5'>Return</span>
					<FlightOptionInformation flight={this.props.returnFlight}/>
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

export default connect(mapStateToProps)(FlightDetailsArrival)
import React from 'react'
import ReactDOM from 'react-dom'
import FlightOptions from './FlightOptions'
import BaggageInformation from './BaggageInformation'
import TiArrowRight from 'react-icons/lib/ti/arrow-right'
import { connect } from 'react-redux';
import FlightOptionInformation from './FlightOptionInformation'
import './FlightDetails.css'


class FlightDetailsDeparture extends React.Component {

    render() {
		return (
				<div className='departure-details' style={{display:'inline-block', width:'50%'}}> 
					<TiArrowRight size={40}/><span className='h5'>Departure</span>
					<FlightOptionInformation flight={this.props.departureFlight}/>
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


export default connect(mapStateToProps)(FlightDetailsDeparture)
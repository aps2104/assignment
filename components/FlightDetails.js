import React from 'react'
import ReactDOM from 'react-dom'
import './FlightDetails.css'
import FlightDetailsArrival from './FlightDetailsArrival'
import FlightDetailsDeparture from './FlightDetailsDeparture'

const now = new Date();
const departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3).toDateString();
const returnDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7).toDateString();

export default class FlightDetails extends React.Component {
    render() {
		return (
			<div className='flight-details-container' style={{width:'100%', height:'100%'}}>
				<FlightDetailsDeparture/>
				<FlightDetailsArrival/>
			</div>
			)
		}
    }

import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import TiArrowLeft from 'react-icons/lib/ti/arrow-left'
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o'
import FlightDuration from './FilightDuration'
import './FlightDetails.css'

const FlightOptionInformation = ({flight}) => {
		return (
				<div className='flight-option-details'> 
					<div className='header'>
							<p className='h5'>{flight.from} to {flight.to} , {flight.timeRange[0]}</p>
						</div>
						<div className='flight-number'>
							<FaPaperPlaneO size={50}/>
							<div className='text-muted'>{flight.airline}  {flight.flight_number}</div>
						</div>
						<div className='flight-details text-muted '>
							<div style={{display:'inline-block', width:'35%'}} className='source font-weight-bold'>
								<p>{flight.sourceCode}  <span className='text-black'>{flight.departureTime}</span></p>
								<p><span className='text-black'>{flight.timeRange[0]}</span></p>
								<p>{flight.from} </p>
							</div>
							<FlightDuration duration ={flight.duration}/>
							<div className='destination font-weight-bold' style={{display:'inline-block', width:'35%'}}>
								<p>{flight.destinationCode}  <span className='text-black'>{flight.arrivalTime}</span></p>
								<p><span className='text-black'>{flight.timeRange[1]}</span></p>
								<p>{flight.to}</p>
							</div>
						</div>
					</div>
			)
		}
export default FlightOptionInformation;

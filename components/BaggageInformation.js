import React from 'react'
import ReactDOM from 'react-dom'
import './FlightDetails.css'

export default class BaggageInformation extends React.Component {
    render() {
		return (<div className='baggage-detail-container'> BAGGAGE ALLOWANCE FOR ADULT
					<div className='baggage-detail-warning'> Baggage warning incase of Multiple Airlines
						<div className='baggage-detail-content'>
							<p style={{display:'inline-block', width:'50%'}}> Check-in: 15kg for Adult</p>
							
							<p style={{display:'inline-block', width:'50%'}}> Cabin: 7kg for Adult</p>
							<p style={{display:'inline-block', width:'50%'}}> Check-in: 15kg for Adult</p>
						</div>
					</div>
				</div>)
		}
    }

import React from 'react'
import ReactDOM from 'react-dom'
import TiBriefcase from 'react-icons/lib/ti/briefcase'
import './FlightDetails.css'

export default class BaggageInformation extends React.Component {
    render() {
		return (<div className='baggage-detail-container text-muted'> <strong>BAGGAGE ALLOWANCE FOR ADULT</strong>
					<div className='baggage-detail-warning'> Baggage warning incase of Multiple Airlines
						<div className='baggage-detail-content'>
							<p style={{display:'inline-block', width:'50%'}}><TiBriefcase size={15}/> Check-in: 15kg for Adult</p>
							<p style={{display:'inline-block', width:'50%'}}><TiBriefcase size={15}/> Cabin: 7kg for Adult</p>
							<p style={{display:'inline-block', width:'50%'}}><TiBriefcase size={15}/> Check-in: 15kg for Adult</p>
						</div>
					</div>
				</div>)
		}
    }

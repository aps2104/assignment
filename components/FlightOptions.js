import React from 'react'
import ReactDOM from 'react-dom'
import './FlightDetails.css'
import { connect } from 'react-redux';
import { setDeparture, setReturn } from '../actions/flight';
import {flightsData} from '../utils/flights-data';
import _ from 'lodash';

class FlightOptions extends React.Component {
	constructor () {
    super();
	this.state = {selectedOption : 0}
	this.onOptionChange = this.onOptionChange.bind(this)
  }
  
  onOptionChange(e) {
	  if(e.target.value === 'option0') {
		  this.setState({selectedOption: 0}, ()=> {
			if( this.props.source === 'departure') {
				this.props.doSetDeparture(this.state.selectedOption)
			  }
			  else{
				this.props.doSetReturn(this.state.selectedOption)
			  }
		  })
	  }
	  else {
		  this.setState({selectedOption: 1}, ()=>{
			if( this.props.source === 'departure') {
				this.props.doSetDeparture(this.state.selectedOption)
			  }
			  else{
				this.props.doSetReturn(this.state.selectedOption)
			  }
		  })
	  }
	  
	  
  }
    render() {
		return (
				<div className='flight-options text-muted'>
					<strong>{flightsData[0].from} to {flightsData[0].to}</strong>
						<form>
						{_.map(flightsData, (flights, i) => {
							return	(<div className="radio form-check" key={this.props.source+i}>
								<input type="radio" className='with-gap' value={'option'+i} id={this.props.source+i} checked={this.state.selectedOption === i} onChange={this.onOptionChange} />
									<label htmlFor={this.props.source+i}>
									<strong>{flights.sourceCode}</strong> <span className='text-black font-weight-bold'>{flights.departureTime}</span> 
									
									<span className='connector-line'> {flights.duration + ' | ' + flights.stops} </span> <strong>{flights.destinationCode}</strong> <span className='text-black font-weight-bold'>{flights.arrivalTime}</span></label>
						</div>)
						} )}
					</form>
			</div>
			)
		}
    }
function mapStateToProps ({flights}) {
  return {
	departureFlight: flights.departureFlight,
	returnFlight : flights.returnFlight
  }
}

function mapDispatchToProps (dispatch) {
  return {
    doSetDeparture: (optionIndex) => dispatch(setDeparture(optionIndex)),
    doSetReturn: (optionIndex) => dispatch(setReturn(optionIndex)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightOptions)
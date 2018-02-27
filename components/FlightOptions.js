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
				<div className='flight-options'>
					<p>{flightsData[0].from} to {flightsData[0].to}</p>
						<form>
						{_.map(flightsData, (flights, i) => {
							return	(<div className="radio">
								<input type="radio" value= {'option'+i} checked={this.state.selectedOption === i} onChange={this.onOptionChange} />
									{flights.sourceCode}  {flights.departureTime} {flights.destinationCode}  {flights.arrivalTime}
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
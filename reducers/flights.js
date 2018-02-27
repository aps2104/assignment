import {
  SET_RETURN_FLIGHT,
  SET_DEPARTURE_FLIGHT
} from '../actions/types';
import { flightsData } from '../utils/flights-data';


// Post reducer
const initialState = {
  departureFlight :flightsData[0],
  returnFlight : flightsData[0]
}

export default function post(state = initialState, action) {
  switch(action.type){
    case SET_DEPARTURE_FLIGHT:
      const { departflight } = action
      return {
        ...state,
        departureFlight : departflight
      }
    case SET_RETURN_FLIGHT:
      const { retflight } = action
      return {
        ...state,
        returnFlight : retflight
      }
  
    default:
      return state;
  }
}

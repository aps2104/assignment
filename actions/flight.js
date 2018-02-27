import { flightsData } from '../utils/flights-data';
import _ from 'lodash';
import {
  SET_RETURN_FLIGHT,
  SET_DEPARTURE_FLIGHT
} from './types'

function setDepartureFlight({ departflight }) {
  return {
    type: SET_DEPARTURE_FLIGHT,
    departflight
  }
}
function setReturnFlight({ retflight }) {
  return {
    type: SET_RETURN_FLIGHT,
    retflight
  }
}

export function setDeparture(index) {
  return function (dispatch) {
        let data = _.filter(flightsData, (d, i)=>{
            return i === index;
        })
        dispatch(setDepartureFlight({'departflight': data[0]}))
  }
}

export function setReturn(index) {
  return function (dispatch) {
        let data = _.filter(flightsData, (d, i)=>{
            return i === index;
        })
        dispatch(setReturnFlight({'retflight': data[0]}))
  }
}

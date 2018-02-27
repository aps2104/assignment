import { combineReducers } from 'redux'
import post  from './post'
import flights  from './flights'
import { reducer as form } from 'redux-form';

export default combineReducers({
  form,
  post,
  flights
})

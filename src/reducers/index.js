import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import merge from 'lodash/object/merge'
import {reducer as formReducer} from 'redux-form';
import { ApiActionTypes } from '../actions/api'
import { UserActionTypes } from '../actions/users'
import { items } from './items';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { authentication:{}, users: {}, repos: {} }, action) {
	    	console.log("TYPE:"+action.type)
	
	if (action.response && action.response.entities) {
		switch (action.type) {
	    case UserActionTypes.USER_SUCCESS:
			  return merge({}, state, action.response.entities)
	    	break;
	  	case UserActionTypes.DELETE_USER_SUCCESS:

		  	return {
		  		...state,
		      users: [],
		      
		    };

	    	break;
	  }
	}

	  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ApiActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  items,
  entities,
  errorMessage
});

export default rootReducer;

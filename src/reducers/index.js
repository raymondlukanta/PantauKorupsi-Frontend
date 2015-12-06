import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import merge from 'lodash/object/merge'
import {reducer as formReducer} from 'redux-form';
import { ApiActionTypes } from '../actions/api'
import { UserActionTypes } from '../actions/users'
import { IssuesActionTypes } from '../actions/issues'
import { SessionActionTypes } from '../actions/sessions'
import { items } from './items';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { authentication:{}}, action) {
	    	console.log("TYPE:"+action.type)
	
	if (action.response && action.response.entities) {
		switch (action.type) {
	    case SessionActionTypes.LOGIN_SUCCESS:
	    	alert("Login berhasil")
		    localStorage.setItem('authToken_pantau_korupsi', action.response.entities.sessions["1"].authToken);
			  return merge({}, state, action.response.entities)
	    	break;
	  	case UserActionTypes.DELETE_USER_SUCCESS:
				localStorage.removeItem("authToken_pantau_korupsi")
		  	return {
		  		...state,
		      users: [],
		      
		    };
	    	break;
	    case IssuesActionTypes.CREATE_ISSUE_SUCCESS:
	    	alert("Penambahan Kasus berhasil")
			return merge({}, state, action.response.entities)
	    	break;
	    case IssuesActionTypes.CREATE_ISSUE_FAILED:
	    	alert("Penambahan Kasus gagal")
			return merge({}, state, action.response.entities)
	    	break;
      case IssuesActionTypes.READ_ISSUE_LIST_SUCCESS:
        var {
          issues,
          ...oldState
        } = state
        return merge({}, oldState, action.response.entities)
	    default:
			  return merge({}, state, action.response.entities)
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

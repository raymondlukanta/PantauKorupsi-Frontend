import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const FeedsActionTypes = keyMirror({READ_FEEDS_REQUEST: null, READ_FEEDS_SUCCESS: null, READ_FEEDS_FAILURE: null})

// Fetches a user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchReadFeedList(userName) {
  //TODO
  return {
    [CALL_API]: {
      types: [ UserActionTypes.USER_REQUEST, UserActionTypes.USER_SUCCESS, UserActionTypes.USER_FAILURE ],
      endpoint: `users/1`,
      method: 'GET',
      schema: Schemas.USER
    }
  }
}

// Fetches a user.
// Relies on Redux Thunk middleware.
export function loadUser(userName, requiredFields = []) {
  return (dispatch, getState) => {

    const user = getState().entities.users[userName]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchUser(userName))
  }
}

function fetchDeleteUser(userName) {
  return {
    [CALL_API]: {
      types: [ UserActionTypes.DELETE_USER_REQUEST, UserActionTypes.DELETE_USER_SUCCESS, UserActionTypes.DELETE_USER_FAILURE ],
      endpoint: `/v1/users/1`,
      method: 'GET',
      schema: Schemas.USER
    }
  }
}

export function deleteUser(userName, requiredFields = []) {
  return (dispatch, getState) => {
    const user = getState().entities.users[userName]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
      return dispatch(fetchDeleteUser(userName))
    }
    return null
  }
}
import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const UserActionTypes = keyMirror({USER_REQUEST: null, USER_SUCCESS: null, USER_FAILURE: null, DELETE_USER_REQUEST: null, DELETE_USER_SUCCESS: null, DELETE_USER_FAILURE: null})

// Fetches a user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUser(userName) {
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
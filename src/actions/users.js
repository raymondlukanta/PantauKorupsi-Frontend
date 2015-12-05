import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({USER_REQUEST: null, USER_SUCCESS: null, USER_FAILURE: null})

// Fetches a user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUser(userName) {
  return {
    [CALL_API]: {
      types: [ ActionTypes.USER_REQUEST, ActionTypes.USER_SUCCESS, ActionTypes.USER_FAILURE ],
      endpoint: `testUser`,
      method: 'GET',
      schema: Schemas.USER
    }
  }
}

// Fetches a user.
// Relies on Redux Thunk middleware.
export function loadUser(userName) {
  return (dispatch, getState) => {

    const user = getState().entities.users[userName]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchUser(userName))
  }
}
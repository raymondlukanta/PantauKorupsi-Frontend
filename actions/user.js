import { CALL_API, Schemas } from '../middlewares/apiPayroll'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Fetches a user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUser(userName) {
  
  return {
    [CALL_API]: {
      types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
      endpoint: `testUser`,
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
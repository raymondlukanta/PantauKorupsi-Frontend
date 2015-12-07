import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const SessionActionTypes = keyMirror({
    LOGIN_REQUEST: null, LOGIN_SUCCESS: null, LOGIN_FAILURE: null,
    LOGOUT: null,
  })

function fetchLogin(body) {
  return {
    [CALL_API]: {
      types: [ SessionActionTypes.LOGIN_REQUEST, SessionActionTypes.LOGIN_SUCCESS, SessionActionTypes.LOGIN_FAILURE ],
      endpoint: 'sessions',
      method: 'POST',
      body: body,
      schema: Schemas.SESSION
    }
  }
}

export function doLogin(body) {
  return (dispatch, getState) => {
    return dispatch(fetchLogin(body))
  }
}

export function doLogout() {
  return {
    type: SessionActionTypes.LOGOUT
  };
}
import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const SessionActionTypes = keyMirror({
    LOGIN_REQUEST: null, LOGIN_SUCCESS: null, LOGIN_FAILURE: null
  })

function fetchSession(issueId) {
  return {
    [CALL_API]: {
      types: [ IssuesActionTypes.READ_ISSUE_REQUEST, IssuesActionTypes.READ_ISSUE_SUCCESS, IssuesActionTypes.READ_ISSUE_FAILURE ],
      endpoint: 'issues/' + issueId,
      method: 'GET',
      schema: Schemas.ISSUE
    }
  }
}

export function loadSession(issueId) {
  return (dispatch, getState) => {
    return dispatch(fetchSession(issueId))
  }
}
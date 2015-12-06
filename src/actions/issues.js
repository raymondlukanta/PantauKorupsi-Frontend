import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const IssuesActionTypes = keyMirror({
    READ_ISSUE_REQUEST: null, READ_ISSUE_SUCCESS: null, READ_ISSUE_FAILURE: null, 
    READ_ISSUE_LIST_REQUEST: null, READ_ISSUE_LIST_SUCCESS: null, READ_ISSUE_LIST_FAILURE: null,
    UPDATE_ISSUE_LIST_REQUEST: null, UPDATE_ISSUE_LIST_SUCCESS: null, UPDATE_ISSUE_LIST_FAILURE: null,
  })

// Fetches a user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchReadIssue(userName) {
  //TODO
  return {
    [CALL_API]: {
      types: [ IssuesActionTypes.USER_REQUEST, IssuesActionTypes.USER_SUCCESS, IssuesActionTypes.USER_FAILURE ],
      endpoint: `users/1`,
      method: 'GET',
      schema: Schemas.ISSUE
    }
  }
}

export function loadReadIssue(userName, requiredFields = []) {
  return (dispatch, getState) => {

    const user = getState().entities.users[userName]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchUser(userName))
  }
}

function fetchReadIssueList() {
  return {
    [CALL_API]: {
      types: [ IssuesActionTypes.READ_ISSUE_LIST_REQUEST, IssuesActionTypes.READ_ISSUE_LIST_SUCCESS, IssuesActionTypes.READ_ISSUE_LIST_FAILURE ],
      endpoint: `issues`,
      method: 'GET',
      schema: Schemas.ISSUE_ARRAY
    }
  }
}

export function loadReadIssueList( requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchReadIssueList())
  }
}

function fetchUpdateIssue(issueId) {
  return {
    [CALL_API]: {
      types: [ IssuesActionTypes.UPDATE_ISSUE_LIST_REQUEST, IssuesActionTypes.UPDATE_ISSUE_LIST_SUCCESS, IssuesActionTypes.UPDATE_ISSUE_LIST_FAILURE ],
      endpoint: 'issues/' + issueId +'/edit',
      method: 'GET',
      schema: Schemas.ISSUE
    }
  }
}

export function loadUpdateIssueList( requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchUpdateIssue())
  }
}
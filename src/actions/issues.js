import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const IssuesActionTypes = keyMirror({
    READ_ISSUE_REQUEST: null, READ_ISSUE_SUCCESS: null, READ_ISSUE_FAILURE: null, 
    READ_ISSUE_LIST_REQUEST: null, READ_ISSUE_LIST_SUCCESS: null, READ_ISSUE_LIST_FAILURE: null,
    UPDATE_ISSUE_LIST_REQUEST: null, UPDATE_ISSUE_LIST_SUCCESS: null, UPDATE_ISSUE_LIST_FAILURE: null,
  })

function fetchReadIssue(issueId) {
  return {
    [CALL_API]: {
      types: [ IssuesActionTypes.READ_ISSUE_REQUEST, IssuesActionTypes.READ_ISSUE_SUCCESS, IssuesActionTypes.READ_ISSUE_FAILURE ],
      endpoint: 'issues/' + issueId,
      method: 'GET',
      schema: Schemas.ISSUE
    }
  }
}

export function loadReadIssue(issueId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadIssue(issueId))
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
import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'
import Qs from 'qs'

export const IssuesActionTypes = keyMirror({
    READ_ISSUE_REQUEST: null, READ_ISSUE_SUCCESS: null, READ_ISSUE_FAILURE: null, 
    READ_ISSUE_LIST_REQUEST: null, READ_ISSUE_LIST_SUCCESS: null, READ_ISSUE_LIST_FAILURE: null,
    UPDATE_ISSUE_LIST_REQUEST: null, UPDATE_ISSUE_LIST_SUCCESS: null, UPDATE_ISSUE_LIST_FAILURE: null,
    CREATE_ISSUE_REQUEST: null, CREATE_ISSUE_SUCCESS: null, CREATE_ISSUE_FAILURE: null, 
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

function fetchReadIssueList(params) {
  var endpoint = 'issues?' + Qs.stringify(params, { encode: false })
  console.log(endpoint)
  console.log(params)
  return {
    [CALL_API]: {
      types: [ IssuesActionTypes.READ_ISSUE_LIST_REQUEST, IssuesActionTypes.READ_ISSUE_LIST_SUCCESS, IssuesActionTypes.READ_ISSUE_LIST_FAILURE ],
      endpoint: endpoint,
      method: 'GET',
      schema: Schemas.ISSUE_ARRAY
    }
  }
}

export function loadReadIssueList(params) {
  return (dispatch, getState) => {
    return dispatch(fetchReadIssueList(params))
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

function fetchCreateIssue(body) {
  return {
    [CALL_API]: {
      types: [  IssuesActionTypes.CREATE_ISSUE_REQUEST, IssuesActionTypes.CREATE_ISSUE_SUCCESS, IssuesActionTypes.CREATE_ISSUE_FAILURE ],
      endpoint: 'issues',
      method: 'POST',
      body: body,
      schema: Schemas.ISSUE
    }
  }
}

export function loadCreateIssue(body) {
  return (dispatch, getState) => {
    if (body.status_id === undefined) {
      body.status_id = 1;
    }
    if (body.financial_cost === undefined) {
      body.financial_cost = 0;
    }
    body.started_at = "2015/12/07"
    
    return dispatch(fetchCreateIssue(body))
  }
}
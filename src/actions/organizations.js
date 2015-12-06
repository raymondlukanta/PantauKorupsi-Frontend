import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const OrganizationsActionTypes = keyMirror({
    READ_ORGANIZATION_REQUEST: null, READ_ORGANIZATION_SUCCESS: null, READ_ORGANIZATION_FAILURE: null, 
    READ_ORGANIZATION_LIST_REQUEST: null, READ_ORGANIZATION_LIST_SUCCESS: null, READ_ORGANIZATION_LIST_FAILURE: null,
    UPDATE_ORGANIZATION_LIST_REQUEST: null, UPDATE_ORGANIZATION_LIST_SUCCESS: null, UPDATE_ORGANIZATION_LIST_FAILURE: null,
  })

function fetchReadOrganization(organizationId) {
  return {
    [CALL_API]: {
      types: [ OrganizationsActionTypes.READ_ORGANIZATION_REQUEST, OrganizationsActionTypes.READ_ORGANIZATION_SUCCESS, OrganizationsActionTypes.READ_ORGANIZATION_FAILURE ],
      endpoint: 'organizations/' + organizationId,
      method: 'GET',
      schema: Schemas.ORGANIZATION
    }
  }
}

export function loadReadOrganization(organizationId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadOrganization(organizationId))
  }
}

function fetchReadOrganizationList() {
  return {
    [CALL_API]: {
      types: [ OrganizationsActionTypes.READ_ORGANIZATION_LIST_REQUEST, OrganizationsActionTypes.READ_ORGANIZATION_LIST_SUCCESS, OrganizationsActionTypes.READ_ORGANIZATION_LIST_FAILURE ],
      endpoint: `organizations`,
      method: 'GET',
      schema: Schemas.ORGANIZATION_ARRAY
    }
  }
}

export function loadReadOrganizationList( requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchReadOrganizationList())
  }
}

function fetchUpdateOrganization(organizationId) {
  return {
    [CALL_API]: {
      types: [ OrganizationsActionTypes.UPDATE_ORGANIZATION_LIST_REQUEST, OrganizationsActionTypes.UPDATE_ORGANIZATION_LIST_SUCCESS, OrganizationsActionTypes.UPDATE_ORGANIZATION_LIST_FAILURE ],
      endpoint: 'organizations/' + organizationId +'/edit',
      method: 'GET',
      schema: Schemas.ORGANIZATION
    }
  }
}

export function loadUpdateOrganizationList() {
  return (dispatch, getState) => {
    return dispatch(fetchUpdateOrganization())
  }
}
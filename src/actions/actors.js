import { CALL_API, Schemas } from '../middlewares/api'
import keyMirror from 'keymirror'

export const ActorsActionTypes = keyMirror({
    READ_ACTOR_REQUEST: null, READ_ACTOR_SUCCESS: null, READ_ACTOR_FAILURE: null, 
    READ_ACTOR_LIST_REQUEST: null, READ_ACTOR_LIST_SUCCESS: null, READ_ACTOR_LIST_FAILURE: null,
    UPDATE_ACTOR_LIST_REQUEST: null, UPDATE_ACTOR_LIST_SUCCESS: null, UPDATE_ACTOR_LIST_FAILURE: null,
  })

function fetchReadActor(actorId) {
  return {
    [CALL_API]: {
      types: [ ActorsActionTypes.READ_ACTOR_REQUEST, ActorsActionTypes.READ_ACTOR_SUCCESS, ActorsActionTypes.READ_ACTOR_FAILURE ],
      endpoint: 'actors/'+actorId,
      method: 'GET',
      schema: Schemas.ACTOR
    }
  }
}

export function loadReadActor(actorId, requiredFields = []) {
  return (dispatch, getState) => {

    const actor = getState().entities.actors[actorId]
    if (actor && requiredFields.every(key => actor.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchReadActor(userName))
  }
}

function fetchReadActorList() {
  return {
    [CALL_API]: {
      types: [ ActorsActionTypes.READ_ACTOR_LIST_REQUEST, ActorsActionTypes.READ_ACTOR_LIST_SUCCESS, ActorsActionTypes.READ_ACTOR_LIST_FAILURE ],
      endpoint: `actors`,
      method: 'GET',
      schema: Schemas.ACTOR_ARRAY
    }
  }
}

export function loadReadActorList( requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchReadActorList())
  }
}

function fetchUpdateActor(actorId) {
  return {
    [CALL_API]: {
      types: [ ActorsActionTypes.UPDATE_ACTOR_LIST_REQUEST, ActorsActionTypes.UPDATE_ACTOR_LIST_SUCCESS, ActorsActionTypes.UPDATE_ACTOR_LIST_FAILURE ],
      endpoint: 'actors/' + actorId +'/edit',
      method: 'GET',
      schema: Schemas.ACTOR
    }
  }
}

export function loadUpdateActorList( requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchUpdateActor())
  }
}
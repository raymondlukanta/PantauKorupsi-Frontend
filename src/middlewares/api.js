import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import FormUrlEncoded from "form-urlencoded";
import { BaseURL } from 'utils/constants'

const API_ROOT = BaseURL

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, option, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl, option)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      
      const camelizedJson = camelizeKeys(json)

      return Object.assign({},
        normalize(camelizedJson, schema)
      )
    })
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr
const userSchema = new Schema('users', {
  idAttribute: 'id'
})

const actorSchema = new Schema('actors', {
  idAttribute: 'id'
})

const feedSchema = new Schema('feeds', {
  idAttribute: 'id'
})

const issueSchema = new Schema('issues', {
  idAttribute: 'id'
})

const organizationSchema = new Schema('organizations', {
  idAttribute: 'id'
})

const sessionSchema = new Schema('sessions', {
  idAttribute: 'id'
})

// issueSchema.define({
//   actors: arrayOf(actorSchema),
//   feeds: arrayOf(feedSchema),
//   organizations: arrayOf(organizationSchema)
// });

// Schemas for Github API responses.
export const Schemas = {
  SESSION: sessionSchema,
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  ACTOR: actorSchema,
  ACTOR_ARRAY: arrayOf(actorSchema),
  FEED: feedSchema,
  FEED_ARRAY: arrayOf(feedSchema),
  ISSUE: issueSchema,
  ISSUE_ARRAY: arrayOf(issueSchema),
  ORGANIZATION: organizationSchema,
  ORGANIZATION_ARRAY: arrayOf(organizationSchema)
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, method, body, contentType, types } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!method) {
    throw new Error('Specify one of the HTTP method.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  var option = generateOptions(method, body, contentType)

  return callApi(endpoint, option, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}

function generateOptions(method, body, contentType) {
    var options = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + localStorage.getItem("authToken_pantau_korupsi") 
      }
    };
 
    if (method !== "GET") {
      options.method = method;
    }
 
    if (body !== undefined) {
      options.body = FormUrlEncoded.encode(body);
      console.log("options.body")
      console.log(options.body)

    }
 
    if (contentType == 'multipart-form'){
      options.headers = {};
      options.body = body;
    }
 
    return options;
  }

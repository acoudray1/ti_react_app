/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const fetchProjectLoading = (state) => ({
  ...state,
  projectIsLoading: true,
  projectErrorMessage: null,
})

export const fetchProjectSuccess = (state, { project }) => ({
  ...state,
  project: project,
  projectIsLoading: false,
  projectErrorMessage: null,
})

export const fetchProjectFailure = (state, { errorMessage }) => ({
  ...state,
  project: {},
  projectIsLoading: false,
  projectErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_PROJECT_LOADING]: fetchProjectLoading,
  [ExampleTypes.FETCH_PROJECT_SUCCESS]: fetchProjectSuccess,
  [ExampleTypes.FETCH_PROJECT_FAILURE]: fetchProjectFailure,
})

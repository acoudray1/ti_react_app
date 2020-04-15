import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { projectService } from 'App/Services/ProjectService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake project informations.
 * Feel free to remove it.
 */
export function* fetchProject() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchProjectLoading())

  // Fetch project informations from an API
  const project = yield call(projectService.fetchProject)
  if (project) {
    yield put(ExampleActions.fetchProjectSuccess(project))
  } else {
    yield put(
      ExampleActions.fetchProjectFailure('There was an error while fetching project informations.')
    )
  }
}

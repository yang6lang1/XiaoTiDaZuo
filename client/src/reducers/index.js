import * as ActionTypes from '../actions';
//import paginate from './paginate' //load other reducers
import { combineReducers } from 'redux'

/* example reducer
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
*/

const rootReducer = combineReducers({
//   entities,
//   pagination,
//   errorMessage,
})

export default rootReducer;

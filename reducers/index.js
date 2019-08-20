import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import getStartedReducer from './getStartedReducer'

console.log("Combining Reducers");

export default combineReducers({
  count : counterReducer,
  flashcards : getStartedReducer,
})

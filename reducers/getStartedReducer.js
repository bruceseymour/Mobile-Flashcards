import  { INITIALDATA, ADDCARD, DELETEDECKS } from '../actions/'
import { addCardToDeck } from '../utils/utils'

///   [action.payload.deckId] : action.payload.newCard

//console.log("Get Started Reducer!")
const getStartedReducer = (state = {}, action = {}) => {
//  console.log("Payload: ", action.payload);

  switch(action.type) {

    case INITIALDATA:
    return {
      ...state,
      decks : action.payload.decks
    }
    break

    case ADDCARD:
     return {
       ...state,
       decks: addCardToDeck(state.decks, action.payload.deckId, action.payload.card)
     }

      case DELETEDECKS:
        return {
          ...state,
          decks: {}
        }
        break

    default:
      return state;
  }
}

export default getStartedReducer;

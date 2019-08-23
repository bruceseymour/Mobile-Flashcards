import  { INITIALDATA, ADDCARD, DELETEDECK, CREATENEWDECK } from '../actions/'
import { addCardToDeck, addNewDeck, deleteDeck } from '../utils/utils'

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

     case CREATENEWDECK:
     return {
       ...state,
       decks : addNewDeck(state.decks, action.payload)
     }
     break

    case DELETEDECK:
        return {
          ...state,
          decks : deleteDeck(state.decks, action.payload)
        }
        break

    default:
      return state;
  }
}

export default getStartedReducer;

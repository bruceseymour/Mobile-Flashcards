import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = "flashcards:notifications"

export function addCardToDeck(decks = {}, deckId = {}, card = {}) {
console.log(decks);

      let shinyObject = {
        ...decks[deckId],
        ...card
      }

      shinyObject  =
      {
      [deckId] : shinyObject
      }

      shinyObject =
      {
        ...decks,
        ...shinyObject
      }

console.log(shinyObject);
return shinyObject;
}

export function addNewDeck(decks = {}, newDeckName = {}) {
 console.log("new deck: ", newDeckName);

let newDeckNameAsObject = {}

newDeckNameAsObject[newDeckName] = {};

//newDeckName = {newDeckName}

      let shinyObject = {
        ...decks,
        ...newDeckNameAsObject
      }

console.log(shinyObject);
return shinyObject;
}

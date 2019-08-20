import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = "flashcards:notifications"

export function addCardToDeck(decks = {}, deckId = {}, card = {}) {

      let shinyObject = {
        ...decks[deckId],
        ...card
      }

      shinyObject  =
      {
      [deckId] : shinyObject
      }

return shinyObject;
}

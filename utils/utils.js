import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = "flashcards:notifications"

export function addCardToDeck(decks = {}, deckId = {}, card = {}) {
//console.log(decks);

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

//console.log(shinyObject);
return shinyObject;
}

export function addNewDeck(decks = {}, newDeckName = {}) {
let newDeckNameAsObject = {}
  newDeckNameAsObject[newDeckName] = {};

      let shinyObject = {
        ...decks,
        ...newDeckNameAsObject
      }
return shinyObject;
}

export function deleteDeck(decks, deckToDelete = "") {
    delete decks[deckToDelete]
    return decks
}

export function localNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 0)
                tomorrow.setHours(0)
                tomorrow.setMinutes(10)

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day'
                  }
                ).then(() => AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)))
              }
            })
        }
      })
}

export const createNotification = () => ({
  title: 'Flashcard Reminder',
  body: "Take a quiz today!!!!",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: false
  }
})


// ACTIONS
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDCARD = 'ADDCARD'
export const INITIALDATA = 'INITIALDATA'
export const DELETEDECK = 'DELETEDECKS'
export const CREATENEWDECK = 'CREATENEWDECK'


// ACTION CREATORS

export const createNewDeck = (name) => {
return {
    type : CREATENEWDECK,
    payload : name
  }
}

export const addCard = (card) => {
  return {
    type : ADDCARD,
    payload : card
  }
}

export const incrementCount = (count) => {
  return {
    type : INCREMENT,
    payload : count
  }
}

export const decrementCount = (count) => {
  return {
    type : DECREMENT,
    payload : count
  }
}

export const getStarted = (data) => {
  return {
    type : INITIALDATA,
    payload : data
  }
}

export const deleteDeck = (data) => {
  return {
    type : DELETEDECK,
    payload : data
  }
}

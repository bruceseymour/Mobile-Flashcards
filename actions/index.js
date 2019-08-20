
// ACTIONS
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDCARD = 'ADDCARD'
export const INITIALDATA = 'INITIALDATA'
export const DELETEDECKS = 'DELETEDECKS'

// ACTION CREATORS

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

export const deleteDecks = (data) => {
  return {
    type : DELETEDECKS,
    payload : data
  }
}

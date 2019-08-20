import  {INCREMENT, DECREMENT} from '../actions/'


const counterReducer = (state = {}, action) => {
  console.log("Importing counterReducer");


  switch(action.type) {

    case INCREMENT:
      if (isNaN(state.count)){ state.count = 0}
      return {
        ...state,
        count : state.count + action.payload
      }
      break

    case DECREMENT:
    return {
      ...state,
      count : state.count - action.payload
    }
      break

    default:
      return state;
  }
}

export default counterReducer;

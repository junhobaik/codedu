import * as types from './actionTypes.js';

let initialState = {
  score : 0,
  length : 0
}

const scoreReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.QUIZ_SETSCORE:
      return {...state, score: action.value};
    case types.QUIZ_SETLENGTH:
      return {...state, length: action.value};
    default:
      return state;
  }
}

export default scoreReducer;
import * as types from './actionTypes';

export function setScore(score) {
  return {
      type : types.QUIZ_SETSCORE,
      value : score
  }
}
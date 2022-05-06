import { DECREMENT, INCREMENT } from '../constants';

function increment() {
  return {
    type: INCREMENT,
  };
}

function decrement() {
  return {
    type: DECREMENT,
  };
}

function asyncIncrement() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export { increment, decrement, asyncIncrement };

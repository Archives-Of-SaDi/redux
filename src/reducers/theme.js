import { CHANGE_THEME } from '../constants';

const initialState = {
  value: 'light',
};

function theme(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}

export { theme };

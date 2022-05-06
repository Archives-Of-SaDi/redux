import { combineReducers } from 'redux';
import { counter } from './counter';
import { theme } from './theme';

const reducers = combineReducers({
  counter,
  theme,
});

export { reducers };

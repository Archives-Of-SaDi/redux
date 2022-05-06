import { CHANGE_THEME } from '../constants';

function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}

export { changeTheme };

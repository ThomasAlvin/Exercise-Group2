import { Input } from '@chakra-ui/react';
import { auth_types } from './types';

const init = {
  email: 'thomsaa',
  password: 'lol',
};
function userReducer(state = init, action) {
  if (action.type == auth_types.login) {
    return {
      state,
      mail: action.payload.gmail,
      passwords: action.payload.passwords,
    };
  } else if (action.type == auth_types.login) {
    return { ...init };
  }
  return state;
}
export default userReducer;

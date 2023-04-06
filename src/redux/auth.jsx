import { Input } from '@chakra-ui/react';
import { auth_types } from './types';

const init = {
  email: '',
  password: '',
};
function userReducer(state = init, a) {
  if (a.type == auth_types.login) {
    return {
      state,
      email: a.payload.email,
      password: a.payload.password,
    };
  } else if (a.type == auth_types.logout) {
    return { ...init };
  }
  return state;
}
export default userReducer;

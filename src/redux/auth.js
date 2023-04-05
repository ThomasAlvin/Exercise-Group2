const init = {
  email: 'orang',
  password: '',
};

function userReducer(state = init, action) {
  //action adalah event yang terjadi
  if (action.type === 'login') {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  } else {
    return init;
  }
  return state;
}

export default userReducer;

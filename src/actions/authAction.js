export const setLoggedUser = () => dispatch => {
  let token = null;

  if (localStorage.getItem('jwtToken'))
    token = JSON.parse(localStorage.getItem('jwtToken')).accessToken;
  console.log('hello');
  dispatch({
    type: 'SET_LOGGED_USER',
    payload: { token },
  });
};

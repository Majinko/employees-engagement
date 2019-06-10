const initialState = {
  token: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
}

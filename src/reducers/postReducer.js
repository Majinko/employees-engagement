const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ASPECTS':
      return {
        ...state,

        aspects: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ASPECTS':
      return {
        ...state,

        aspects: action.payload,
      };
    case 'SELECT_ASPECT':
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}

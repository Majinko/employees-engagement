const initialState = {
  aspects: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ASPECTS':
      return {
        ...state,
        aspects: action.payload,
      };

    case 'SELECT_ASPECT':
      state.aspects[action.payload.id].isActive = action.payload.value;
      return JSON.parse(JSON.stringify(state));

    case 'LEAVE_FEEDBACK':
      state.aspects[action.payload.id].payload = action.payload.payload;
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
}

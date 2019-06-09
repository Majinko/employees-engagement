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

    case 'SET_ASPECT':
      state.aspects[action.payload.id].isActive = action.payload.value;
      return JSON.parse(JSON.stringify(state));

    case 'UNSET_ASPECT':
      state.aspects[action.payload.id].isActive = action.payload.value;
      return JSON.parse(JSON.stringify(state));

    case 'LEAVE_FEEDBACK':
      state.aspects[action.payload.id].payload = action.payload.payload;
      state.aspects[action.payload.id].wantsToMeet = action.payload.wantsToMeet;
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
}

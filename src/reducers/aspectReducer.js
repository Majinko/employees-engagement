const initialState = {
  aspects: [],
};

export default function(state = initialState, action) {
  const aspect = state.aspects.find(
    element => element.id === action.payload.id
  );

  switch (action.type) {
    case 'FETCH_ASPECTS':
      return {
        ...state,
        aspects: action.payload,
      };

    case 'SET_ASPECT':
      aspect.isActive = action.payload.value;
      return JSON.parse(JSON.stringify(state));

    case 'UNSET_ASPECT':
      aspect.isActive = action.payload.value;
      return JSON.parse(JSON.stringify(state));

    case 'LEAVE_FEEDBACK':
      aspect.payload = action.payload.payload;
      aspect.wantsToMeet = action.payload.wantsToMeet;
      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
}

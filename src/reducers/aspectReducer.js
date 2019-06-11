const initialState = {
  aspects: [],
  staticAspect: [],
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

    case 'FETCH_STATIC_ASPECTS':
      return {
        ...state,
        staticAspect: action.payload,
      };

    case 'SET_ASPECT':
      if (aspect) {
        aspect.isActive = action.payload.value;
      } else {
        state.staticAspect.isActive = action.payload.value;
      }

      return JSON.parse(JSON.stringify(state));

    case 'UNSET_ASPECT':
      if (aspect) {
        aspect.isActive = action.payload.value;
      } else {
        state.staticAspect.isActive = action.payload.value;
      }

      return JSON.parse(JSON.stringify(state));

    case 'LEAVE_FEEDBACK':
      state.staticAspect.payload = action.payload.payload;
      state.staticAspect.wantsToMeet = action.payload.wantsToMeet;

      return JSON.parse(JSON.stringify(state));

    default:
      return state;
  }
}

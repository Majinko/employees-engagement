const link =
  'https://gist.githubusercontent.com/LukasPolak/a44080ed5b6e4e840363d672e5af0fd0/raw/0a1cac8dfb4216ab95ec29411061347413947ade/ee_aspects.json';

export const fetchAspects = () => dispatch => {
  fetch(link)
    .then(res => res.json())
    .then(aspects =>
      dispatch({
        type: 'FETCH_ASPECTS',
        payload: aspects,
      })
    );
};

export const setAspect = (id, value) => dispatch => {
  dispatch({
    type: 'SET_ASPECT',
    payload: { id, value },
  });
};

export const unsetAspect = (id, value) => dispatch => {
  dispatch({
    type: 'UNSET_ASPECT',
    payload: { id, value },
  });
};

export const leaveFeedback = (id, payload, wantsToMeet) => dispatch => {
  dispatch({
    type: 'LEAVE_FEEDBACK',
    payload: { id, payload, wantsToMeet },
  });
};

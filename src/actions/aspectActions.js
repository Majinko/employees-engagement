const link =
  'https://gist.githubusercontent.com/LukasPolak/a44080ed5b6e4e840363d672e5af0fd0/raw/38748da243e7953a52ca1ad0760557aa766aadaf/ee_aspects.json';

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

export const leaveFeedback = (id, payload) => dispatch => {
  dispatch({
    type: 'LEAVE_FEEDBACK',
    payload: { id, payload },
  });
};

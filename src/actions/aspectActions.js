import { endpoint } from '../config';
const link = endpoint + '/ratingcard/all';

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

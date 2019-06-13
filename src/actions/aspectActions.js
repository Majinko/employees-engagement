import { endpoint } from '../config';

import { postFeedback } from './../services/aspects';

const link = endpoint + '/ratingcard/all';

const staticAspect = {
  id: 5,
  type: 'more',
  icon: 'exchange',
  text: 'There was more',
  isActive: false,
  payload: null,
  wantsToMeet: false,
  rating: 20,
};

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

export const fetchStaticAspect = () => dispatch => {
  dispatch({
    type: 'FETCH_STATIC_ASPECTS',
    payload: staticAspect,
  });
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

export const postFeedbackAction = async feedback => {
  const data = await postFeedback(feedback);
  console.log(data);
};

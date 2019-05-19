const link =
  'https://gist.githubusercontent.com/LukasPolak/a44080ed5b6e4e840363d672e5af0fd0/raw/8b5de78a93d69a2280c53c0d928de28fbb42b500/ee_aspects.json';

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

export const fetchAspects = () => dispatch => {
  fetch(
    'https://gist.githubusercontent.com/LukasPolak/a44080ed5b6e4e840363d672e5af0fd0/raw/a5b52fe29c8112801c56f26fdd421609ba5e1abe/ee_aspects.json'
  )
    .then(res => res.json())
    .then(aspects =>
      dispatch({
        type: 'FETCH_ASPECTS',
        payload: aspects,
      })
    );
};

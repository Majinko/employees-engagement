import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/index';

const initialState = {
  aspects: [
    { icon: 'user-headset', text: 'Excellent communication' },
    { icon: 'lightbulb-on', text: 'Extraordinary creativity' },
    { icon: 'bullseye-arrow', text: 'Goal-oriented' },
    { icon: 'handshake', text: 'Effective cooperation' },
    { icon: 'calendar-alt', text: 'Precise planning' },
    { icon: 'exchange', text: 'There was more' },
  ],
};

const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

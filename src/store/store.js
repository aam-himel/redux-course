// import { createStore } from 'redux';
// import reducer from './bugs';
// console.log(reducer);


// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import { configureStore } from '@reduxjs/toolkit';
import reducer from './projects';

const store = configureStore({
    reducer
})

export default store;
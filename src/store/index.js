import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './mainSlice';

const store = configureStore({
    reducer: {
        teste: mainReducer
    }
});

export default store;

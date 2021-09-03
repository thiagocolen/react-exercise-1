import { configureStore } from '@reduxjs/toolkit';

import testeReducer from './teste';

const store = configureStore({
    reducer: {
        teste: testeReducer
    }
});

export default store;

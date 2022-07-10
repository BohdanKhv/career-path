import { configureStore } from '@reduxjs/toolkit';
import oewsReducer from '../features/oews/oewsSlice';
import localReducer from '../features/local/localSlice';


export const store = configureStore({
    reducer: {
        oews: oewsReducer,
        local: localReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/job/jobSlice';
import educationReducer from '../features/education/educationSlice';
import localReducer from '../features/local/localSlice';


export const store = configureStore({
    reducer: {
        job: jobReducer,
        education: educationReducer,
        local: localReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
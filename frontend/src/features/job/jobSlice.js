import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobService from './jobService';


const initialState = {
    jobs: [],
    isLoading: false,
    isUpdating: false,
    isError: false,
    isSuccess: false,
    offset: 0,
    limit: 30,
    hasMore: true,
    msg: '',
};


// Get jobs
export const getJobs = createAsyncThunk(
    'job/getJobs',
    async (data, thunkAPI) => {
        try {
            const { offset } = thunkAPI.getState().job;
            return await jobService.getJobs({...data, offset});
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Create slice
const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        // ResetJobs state
        resetJobs: (state) => {
            state.jobs = [];
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.isUpdating = false;
            state.offset = 0;
            state.limit = 30;
            state.hasMore = true;
            state.msg = '';
        },
    },
    extraReducers: (builder) => {
        // get jobs
        builder.addCase(getJobs.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = [...state.jobs, ...action.payload];
            state.offset = state.offset + state.limit;
            state.hasMore = action.payload.length === state.limit;
        });
        builder.addCase(getJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = action.payload;
        });
    }
});



// Export reducer
export const { resetJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
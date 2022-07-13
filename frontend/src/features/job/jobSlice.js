import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobService from './jobService';


const initialState = {
    jobs: [],
    isLoading: false,
    isUpdating: false,
    isError: false,
    isSuccess: false,
    msg: '',
};


// Get jobs
export const getJobs = createAsyncThunk(
    'job/getJobs',
    async (data, thunkAPI) => {
        try {
            return await jobService.getJobs(data);
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
            state.jobs = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.isUpdating = false;
            state.msg = '';
        },
    },
    extraReducers: (builder) => {
        // get jobs
        builder.addCase(getJobs.pending, (state, action) => {
            state.isFollowLoading = true;
        });
        builder.addCase(getJobs.fulfilled, (state, action) => {
            state.isFollowLoading = false;
            state.follows = [...state.follows, ...action.payload];
        });
        builder.addCase(getJobs.rejected, (state, action) => {
            state.isFollowLoading = false;
            state.msg = action.payload;
        });
    }
});



// Export reducer
export const { resetJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
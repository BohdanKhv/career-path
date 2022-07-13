import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import educationService from './educationService';


const initialState = {
    educations: [],
    isLoading: false,
    isUpdating: false,
    isError: false,
    isSuccess: false,
    msg: '',
};


// Get oews
export const getEducation = createAsyncThunk(
    'education/getEducation',
    async (data, thunkAPI) => {
        try {
            return await educationService.getEducation(data);
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
const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        // ResetEducation state
        resetEducation: (state) => {
            state.oews = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.isUpdating = false;
            state.msg = '';
        },
    },
    extraReducers: (builder) => {
        // get Oews
        builder.addCase(getEducation.pending, (state, action) => {
            state.isFollowLoading = true;
        });
        builder.addCase(getEducation.fulfilled, (state, action) => {
            state.isFollowLoading = false;
            state.follows = [...state.follows, ...action.payload];
        });
        builder.addCase(getEducation.rejected, (state, action) => {
            state.isFollowLoading = false;
            state.msg = action.payload;
        });
    }
});



// Export reducer
export const { resetEducation } = educationSlice.actions;
export default educationSlice.reducer;
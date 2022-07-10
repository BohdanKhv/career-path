import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import oewsService from './oewsService';


const initialState = {
    oews: null,
    isLoading: false,
    isUpdating: false,
    isError: false,
    isSuccess: false,
    msg: '',
};


// Get oews
export const getOews = createAsyncThunk(
    'oews/getOews',
    async (data, thunkAPI) => {
        try {
            return await oewsService.getOews(data);
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
const oewsSlice = createSlice({
    name: 'oews',
    initialState,
    reducers: {
        // ResetOews state
        resetOews: (state) => {
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
        builder.addCase(getOews.pending, (state, action) => {
            state.isFollowLoading = true;
        });
        builder.addCase(getOews.fulfilled, (state, action) => {
            state.isFollowLoading = false;
            state.follows = [...state.follows, ...action.payload];
        });
        builder.addCase(getOews.rejected, (state, action) => {
            state.isFollowLoading = false;
            state.msg = action.payload;
        });
    }
});



// Export reducer
export const { resetOews } = oewsSlice.actions;
export default oewsSlice.reducer;
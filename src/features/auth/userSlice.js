import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import api from '../../services/api/api';

const getUser = createAsyncThunk(
    'user/get',
    async () => {
        const response = await api.get("get-user/");
        return response.data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: (function () {
        return {
            name:'',
            email:''
        }
    })(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.name = action.payload.token.name;
                state.email = action.payload.token.email;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.name = '';
                state.email = '';
            })
    },
})

export default userSlice.reducer
export {getUser}
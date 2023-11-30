import { createSlice } from '@reduxjs/toolkit';

export const loginDataSlice = createSlice({
    name: "loginData",
    initialState: {
        loginData: {}
    },
    reducers: {
        setLoginData: (state, action) => {
            state.loginData = action.payload.value
        }
    }
})
export const { setLoginData } = loginDataSlice.actions;
export default loginDataSlice.reducer;
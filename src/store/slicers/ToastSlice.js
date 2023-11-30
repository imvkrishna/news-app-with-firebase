import { createSlice } from "@reduxjs/toolkit"
export const toastSlice = createSlice({

    name: "toast",
    initialState: {
        show:false,
        message:"No Message"
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload.value
        },
        setMessage: (state, action) => {
            state.message = action.payload.value
        }
    }
})
export const { setShow,setMessage } = toastSlice.actions
export default toastSlice.reducer;
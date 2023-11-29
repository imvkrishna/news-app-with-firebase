import { createSlice } from "@reduxjs/toolkit"
export const articleSlice = createSlice({

    name: "article",
    initialState: {
        article: {}
    },
    reducers: {
        setArticle: (state, action) => {
            state.article = action.payload.value
        }
    }
})
export const { setArticle } = articleSlice.actions
export default articleSlice.reducer;
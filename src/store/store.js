import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import LoginSlice from './slicers/LoginDataSlice';
import ArticleSlice from './slicers/ArticleSlice';
import ToastSlice from './slicers/ToastSlice';

const rootReducer = combineReducers({
    loginData: LoginSlice,
    article: ArticleSlice,
    toast: ToastSlice
});

const store = configureStore({
    reducer: rootReducer
})
export default store;
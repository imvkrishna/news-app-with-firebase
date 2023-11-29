import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import LoginSlice from './slicers/LoginDataSlice';
import ArticleSlice from './slicers/ArticleSlice';

const rootReducer = combineReducers({
    loginData : LoginSlice,
    article : ArticleSlice
});

const store = configureStore({
    reducer: rootReducer
})
export default store;
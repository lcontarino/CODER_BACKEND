import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import productSlice from './features/productSlice';
import userSlice from './features/userslice';
import appApi from './services/appApi';

// Combine reducers
const reducer = combineReducers({
    user: userSlice,
    products: productSlice,
    [appApi.reducerPath]: appApi.reducer,
});

// Configuration for Redux Persist
const persistConfig = {
    key: 'root',
    storage,
    blacklist: [appApi.reducerPath, 'products'],
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;

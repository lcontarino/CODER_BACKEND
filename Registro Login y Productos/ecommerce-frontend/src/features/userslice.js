import { createSlice } from "@reduxjs/toolkit"


//appAPI
import appApi from '../services/appApi'

const initialState = null;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, { payload }) => payload)
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, { payload }) => payload)
    }
})
//export const { logout, addNotification, resetNotification } = userSlice.actions;
export const { logOut } = userSlice
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        token: '',
        userName: ''
    },
    reducers: {
        setIsLoggedIn: (state, payload) => {
            state.isLoggedIn = payload
        },
        setUserName: (state, payload) => {
            state.userName = payload
        },
        setToken: (state, payload) => {
            state.token = payload
        }
    }
})

export const {setIsLoggedIn, setUserName, setToken} = authSlice.actions

export default authSlice.reducer
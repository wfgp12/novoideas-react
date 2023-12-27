import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from '../slices/authSlice'
import appSlice from '../slices/appSlice'

export const store = configureStore({
    reducer: {
        auth: authenticationSlice,
        app: appSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
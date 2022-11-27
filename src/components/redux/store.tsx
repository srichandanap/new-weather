import { configureStore } from '@reduxjs/toolkit'
import { placeSlice } from './weatherSlice'

export const store = configureStore({
    reducer: {
        weather: placeSlice.reducer,

    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;
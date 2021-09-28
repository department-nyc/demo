import { configureStore } from '@reduxjs/toolkit'
import { mapSlice } from './map'

const store = configureStore({
    reducer: {
        map: mapSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store

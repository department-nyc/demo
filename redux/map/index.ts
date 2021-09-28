import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MapState } from './types'

const initialState: MapState = {
    isInitialized: false,
    isLoading: false,
    items: [],
    mapBoundingBox: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
}

export const mapSlice = createSlice({
    name: 'map',

    initialState,

    reducers: {
        init: (state) => {
            state.isInitialized = true
        },
    },

    extraReducers: (builder) => {},
})

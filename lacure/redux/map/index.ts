import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MapState } from './types'

export const mapSlice = createSlice({
    name: 'map',

    initialState: {
        isLoading: false,
        items: [],
        mapBoundingBox: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    } as MapState,

    reducers: {},

    extraReducers: (builder) => {},
})

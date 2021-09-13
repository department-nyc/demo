export type MapItem = {
    title: String
}

export type MapBoundingBox = {
    left: Number
    bottom: Number
    right: Number
    top: Number
}

export type MapState = {
    items: MapItem[]
    mapBoundingBox: MapBoundingBox
    isLoading: Boolean
}

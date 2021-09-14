export type MapItem = {
    title: string
}

export type MapBoundingBox = {
    left: number
    bottom: number
    right: number
    top: number
}

export type MapState = {
    items: MapItem[]
    mapBoundingBox: MapBoundingBox
    isLoading: Boolean
}

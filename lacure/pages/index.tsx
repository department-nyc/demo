import { Home } from '@/components/Home'
import { mapSlice } from '@/redux/map'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Page: NextPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mapSlice.actions.init())
    }, [dispatch])

    return <Home></Home>
}

export default Page

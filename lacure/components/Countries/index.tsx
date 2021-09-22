import { CountryProps } from '@/components/Countries/types'
import { GET_COUNTRIES } from '@/graphql/countries'
import { useQuery } from '@apollo/client'
import { FunctionComponent, useEffect } from 'react'
import * as styled from './styles'

const Country = ({ name, continent }: CountryProps) => {
    return (
        <styled.Country>
            {name} ({continent.name})
        </styled.Country>
    )
}

export const Countries: FunctionComponent<{}> = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES)

    if (loading) return <>Loading...</>
    if (error) return <>Error loading countries: {error.message}</>

    return <styled.Countries>{data.countries.map(Country)}</styled.Countries>
}

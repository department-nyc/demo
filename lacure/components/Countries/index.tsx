import { CountryProps } from '@/components/Countries/types'
import { GET_COUNTRIES } from '@/graphql/countries'
import { useQuery } from '@apollo/client'
import * as styled from './styles'

const Country = ({ name, continent }: CountryProps) => {
    return (
        <styled.Country>
            {name} ({continent.name})
        </styled.Country>
    )
}

export const Countries: React.FunctionComponent<{}> = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES)

    if (loading) return <>Loading...</>
    if (error) return <>Error: {error.message}</>

    return <styled.Countries>{data.countries.map(Country)}</styled.Countries>
}

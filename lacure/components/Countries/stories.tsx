import { Countries } from '@/components/Countries'
import client from '@/graphql/apollo-client'
import { GET_COUNTRIES } from '@/graphql/countries'
import { ApolloProvider } from '@apollo/client'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MockedProvider } from '@apollo/client/testing'
import { CountryProps } from '@/components/Countries/types'

export default {
    title: 'Countries',
    component: Countries,
    decorators: [
        (Story) => (
            <ApolloProvider client={client}>
                <Story />
            </ApolloProvider>
        ),
    ],
} as ComponentMeta<typeof Countries>

const Template: ComponentStory<typeof Countries> = (args) => (
    <Countries {...args} />
)

export const UsingGraphQL = Template.bind({})
UsingGraphQL.args = {}

const countryMocks = [
    {
        request: {
            query: GET_COUNTRIES,
            variables: {},
        },
        result: {
            data: {
                countries: [...Array(5)].map((_, i) => ({
                    name: 'Mocked Country ' + i,
                    continent: {
                        name: 'Mocked Continent',
                    },
                })) as CountryProps[],
            },
        },
    },
]

export const UsingGraphQLMock = Template.bind({})
UsingGraphQLMock.args = {}
UsingGraphQLMock.decorators = [
    (Story) => (
        <MockedProvider mocks={countryMocks}>
            <Story />
        </MockedProvider>
    ),
]

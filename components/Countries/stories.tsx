import { Countries } from '@/components/Countries'
import client from '@/graphql/apollo-client'
import { GET_COUNTRIES } from '@/graphql/countries'
import { ApolloProvider } from '@apollo/client'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { CountryGQLResponse } from '@/graphql/countries.types'
import { GraphQLError } from 'graphql'

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

const countryMocks: MockedResponse[] = [
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
                })) as CountryGQLResponse[],
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

const failedMocks: MockedResponse[] = [
    {
        request: {
            query: GET_COUNTRIES,
            variables: {},
        },
        result: {
            errors: [
                new GraphQLError(
                    'Some GraphQL error',
                    null,
                    null,
                    null,
                    null,
                    null,
                    { code: 'ERROR' }
                ),
            ],
        },
    },
]

export const FailedResponse = Template.bind({})
FailedResponse.args = {}
FailedResponse.decorators = [
    (Story) => (
        <MockedProvider mocks={failedMocks}>
            <Story />
        </MockedProvider>
    ),
]

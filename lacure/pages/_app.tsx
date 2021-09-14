import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import store from '@/redux/store'
import client from '@/graphql/apollo-client'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ApolloProvider>
        </ThemeProvider>
    )
}
export default MyApp

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '@/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}
export default MyApp

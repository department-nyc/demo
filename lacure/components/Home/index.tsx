import { Gallery } from '@/components/Gallery'
import type { FunctionComponent } from 'react'
import * as styles from './styles'

export const Home: FunctionComponent = () => {
    return (
        <styles.Home>
            <styles.Heading>Welcome</styles.Heading>
            <Gallery />
        </styles.Home>
    )
}

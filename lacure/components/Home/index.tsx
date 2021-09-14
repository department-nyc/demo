import { Countries } from '@/components/Countries'
import { Gallery } from '@/components/Gallery'
import * as styles from './styles'

export const Home = () => {
    return (
        <styles.Home>
            <styles.Heading>Welcome</styles.Heading>
            <Gallery />
            <Countries />
        </styles.Home>
    )
}

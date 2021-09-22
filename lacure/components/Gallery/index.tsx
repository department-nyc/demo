import { useSelector } from 'react-redux'
import * as styles from './styles'

type GalleryProps = {
    slideCount?: number
}

export const Gallery = ({ slideCount = 4 }: GalleryProps) => {
    return (
        <styles.Gallery>
            {[...Array(slideCount)].map((_, i) => (
                <styles.Slide key={i} isActive={i == 0}>
                    Slide {i + 1}
                </styles.Slide>
            ))}
        </styles.Gallery>
    )
}

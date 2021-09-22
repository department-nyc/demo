import styled from 'styled-components'

export const Home = styled.div`
    padding: 10px;
`

export const Heading = styled.h1<{ unstyled?: boolean }>`
    ${({ unstyled }) => !unstyled && `font-size: 20px;`}
`

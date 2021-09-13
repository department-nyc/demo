import styled from 'styled-components'

export const Gallery = styled.div`
    padding: 10px;
`

export const Slide = styled.div<{ isActive?: Boolean }>`
    ${(props) => props.isActive && `color: red;`}
`

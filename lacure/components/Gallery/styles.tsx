import styled from 'styled-components'

export const Gallery = styled.div`
    padding: 10px;
`

export const Slide = styled.div<{ isActive?: Boolean; isBold?: Boolean }>`
    font-size: 60px;
    ${(props) => props.isActive && `color: red;`}
    ${(props) => props.isBold && `font-style: bold;`}
`

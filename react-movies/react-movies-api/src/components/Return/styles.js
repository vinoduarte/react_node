import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
color: ${({theme}) => theme.COLORS.PINK};
display: flex;
align-items: center;
gap: 8px;
height: 21px;
margin-bottom: 24px;
cursor: pointer;
width: fit-content;
`
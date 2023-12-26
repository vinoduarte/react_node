import styled from 'styled-components'

export const Container = styled.span`
padding: 8px 16px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
border-radius: 8px;
border: none;
width: fit-content;
color: ${({theme}) => theme.COLORS.WHITE};
`
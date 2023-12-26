import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
height: 48px;
background-color: ${({ theme }) => theme.COLORS.PINK };

border: 0;
padding: 0 16px;
border-radius: 10px;

&:disabled{
  opacity: 0.5;
}
`
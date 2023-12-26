import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 274px;
border-radius: 10px;
border: none;
padding: 19px 24px;
background-color: ${({ theme } ) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY};
margin-bottom: 40px;

> textarea {
  background: transparent;
  border: none;
  width: 100%;
  height: 233px;
  color: white;


  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

}
> svg {
  margin-left: 16px;
}
`
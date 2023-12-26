import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 56px;
border-radius: 10px;
border: none;
padding: 19px 24px;
background-color: ${({ theme } ) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY};
display: flex;
gap: 5px;
align-items: center;
justify-content: center;

> input {
  background: transparent;
  border: none;
  width: 100%;
  color: white;


  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

}

`
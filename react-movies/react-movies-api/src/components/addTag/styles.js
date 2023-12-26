import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: ${({isNew}) => isNew ? `220px` : "224px"};

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};
  
  border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : "none"};
  padding: 8px 16px;
  border-radius: 8px;


  button {
    display: flex;
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }

  input {
    height: 56px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    width: 100%;
    max-width: 100%;
    border: none;
  }
`

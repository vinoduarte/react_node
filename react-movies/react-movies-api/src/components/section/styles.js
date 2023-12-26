import styled from 'styled-components'

export const Container = styled.section`
  font-size: 36px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: 500;
  max-width: 1113px;

  .title {
    margin-right: 20px;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 36px
  }

  #stars {
    display: flex;
    margin-left: 20px;
    gap: 10px;
    font-size: 24px;
  }

  img {
  display: flex;
  align-items: center;
  height: 16px;
  border-radius: 50%;
  border: solid 1px;
  border-color: ${({theme}) => theme.COLORS.BACKGROUND_700}
 }

 .star {
  color: ${({theme}) => theme.COLORS.PINK};
 }

 #creator {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
 }

 #createdAt {
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
 }

 #titleCreationData {
  display: flex;
  margin-top: 24px;
 }
`
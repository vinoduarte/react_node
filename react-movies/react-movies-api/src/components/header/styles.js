import styled from 'styled-components'

export const Container = styled.header`
grid-area: header;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: ${({theme}) => theme.COLORS.GRAY};
display: flex;
justify-content: space-between;
padding: 30px 123px;
gap: 64px;

#text {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: column;
}

#text a {
  color: ${({theme}) => theme.COLORS.BACKGROUND_700}
}

#text h1 {
  font-size: 14px;
  color: white;
  white-space: nowrap;
}

.Profile {
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  gap: 10px
}

img {
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 50%;
  border: solid 1px;
  border-color: ${({theme}) => theme.COLORS.BACKGROUND_700}
}
`
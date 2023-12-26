import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
border-radius: 16px;
padding: 32px;
margin-bottom: 24px;
cursor: pointer;



p {
  overflow: hidden;
  text-overflow: 'ellipsis';
  font-size: 16px;
  color: var(--Gray, #999591);
  max-width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

#tags {
  display: flex;
  gap: 10px;
  height: 32px;
  align-items: center;
  margin-top: 15px;
}
`
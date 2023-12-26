import styled from "styled-components";

export const Container = styled.button`
background-color: ${( { theme } ) => theme.COLORS.BACKGROUND_500};

border: none;
border-radius: 10px;

padding: 22px;
margin-bottom: 16px;


h1 {
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color: ${( { theme } ) => theme.COLORS.WHITE};
  margin-bottom: 8px;
}

footer {
  display: flex;
  align-items: left;
  gap: 8px;
  font-size: 12px;
  margin-top: 15px;
}

.description {
  margin-top: 15px;
  overflow: hidden;
  text-overflow: 'ellipsis';
  font-size: 16px;
  color: var(--Gray, #999591);
  max-width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: left;
  height: 50px;
}

.rating {
  color: ${( { theme } ) => theme.COLORS.PINK};
  justify-content: left;
  display: flex;
  align-items: center;
  gap: 5px;
}



`
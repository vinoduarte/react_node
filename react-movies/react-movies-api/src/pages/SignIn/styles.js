import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;

  h1 {
    font-size: 48px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 48px;
    font-size: 14px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 48px;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 234px clamp(50px, 10%, 240px) 0;

  .inputs {
    display: flex;
    gap: 8px;
    flex-direction: column;
  }

  input {
    padding-left: 5px;
  }

  .submitButton {
    margin-top: 24px;
    margin-bottom: 42px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 30%;
`;

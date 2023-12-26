import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  main {
    grid-area: content;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    height: 96.197px;
    border-radius: 8px;
  }

  .header {
    grid-area: header;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};
    display: flex;
    justify-content: space-between;
    padding: 30px 123px;
    gap: 64px;

    #text a {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    #text h1 {
      font-size: 14px;
      color: white;
      white-space: nowrap;
    }

    .Profile {
      width: fit-content;
      height: auto;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    img {
      display: flex;
      align-items: center;
      height: 56px;
      border-radius: 50%;
      border: solid 1px;
      border-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;

export const Content = styled.div`
  margin: 50px 123px;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #moviesHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
  }

  #HomeButton {
    width: 207px;
  }

  .notes {
    display: flex;
    flex-direction: column;
  }
`;

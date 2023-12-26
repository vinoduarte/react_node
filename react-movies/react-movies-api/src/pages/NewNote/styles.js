import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 116px auto;
grid-template-areas: "header" "content";
background-color: ${( { theme } ) => theme.COLORS.BACKGROUND_800};


main {
  grid-area: content;
  overflow-y: auto;
}

::-webkit-scrollbar {
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.PINK};
  height: 96.197px;
  border-radius: 8px;
}
`

export const Content = styled.div`
width: 100%;
height: fit-content;
padding: 36px 123px;

h1 {
  margin-bottom: 40px;
  color: white;
}

h2 {
  color: ${( { theme } ) => theme.COLORS.GRAY};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px ;
}

#titleandscore {
  margin-bottom: 40px;
  display: flex;
  gap: 40px;

}

#addingMovieTags {
  background-color: ${( { theme } ) => theme.COLORS.BACKGROUND_900};
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.addTagButton {
  background-color: ${( { theme } ) => theme.COLORS.BACKGROUND_900};
  color: ${( { theme } ) => theme.COLORS.GRAY};
  border: 2px dashed ${( { theme } ) => theme.COLORS.GRAY};
  font-size: 16px;
  height: 56px;
  display: flex;
  gap: 5px;
  border-radius: 8px;
  padding: 16px;
  width: fit-content;
  align-items: center;

  input {
    width: fit-content;
    background: none;
    border: none;
    width: 120px;
    color: ${( { theme } ) => theme.COLORS.GRAY};
  }

  > svg {
    color: ${( { theme } ) => theme.COLORS.PINK};
  }

}

.Tag {
  height: 56px;
  display: flex;
  align-items: center;
  gap: 5px;


  > svg {
    color: ${( { theme } ) => theme.COLORS.PINK};
    cursor: pointer;
  }
}

#deleteOrSave {
  display: flex;
  gap: 40px;
}
`
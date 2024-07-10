import styled from "styled-components"

export const Container = styled.section`
   width: 100%;
   height: 100vh;
   background-color: #1C1B1E;
   display: grid;
   grid-template-areas: 
      "header"
      "Content"
   ;
`;

export const Content = styled.section`
   grid-area: Content;
   padding: 0 123px;

   overflow-y: auto;

&::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
  background: #1C1B1E;
}

&::-webkit-scrollbar-thumb {
  background-color: #FF859B;
  border-radius: 20px;
}
`;


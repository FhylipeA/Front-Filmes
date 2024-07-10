import styled from "styled-components";

export const Container = styled.textarea`
   width: 100%;
   height: 250px;

   background-color: #262529;
   color: white;

   border: none;
   resize: none;

   margin-bottom: 8px !important;
   border-radius: 10px;
   padding: 16px;

   &:placeholder {
      color: #948F99;
   }
`;
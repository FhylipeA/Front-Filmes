import styled from "styled-components";

export const Container = styled.div`
   width: 100%;

   display: flex;
   align-items: center;

   background-color: #262529;
   color: #948F99;

   margin-bottom: 8px !important;
   border-radius: 10px;

   > input {
      height: 56px;
      width: 100%;

      padding: 12px;

      color: white;
      background: transparent;
      border: 0;

      &:palceholder {
         color: #948F99;
      }
   }

   > svg {
      margin-left: 16px !important;
   }
`;
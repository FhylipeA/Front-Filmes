import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;

   background-color: ${(isNew) => isNew ? "transparent" : "#262529"};
   color: #948F99;

   border: ${(isNew) => isNew ? '1px dashed #948F99' : "none"};

   border-radius: 10px;
   padding: 16px;

   > button {
      border: none;
      background: none;
   }

   .button-delete {
      color: #FF849B;
      svg {
         font-size: 24px;
      }
   }

   .button-add {
      color: #FF849B;
      svg {
         font-size: 24px;
      }
   }

   > input {
      height: 30px;
      

      padding: 5px;

      color: white;
      background: transparent;

      border: none;

      &:placeholder {
         color: #948F99;
      }
   }

`;
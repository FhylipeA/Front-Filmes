import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   background-color: #FF859B;
   color: #312E38;

   height: 56px;
   border: 0;
   padding: 0 16px;
   margin-top: 16px !important;
   border-radius: 10px;
   font-weight: 500;

   &:disabled {
      opacity: 0.5;
   }
`;
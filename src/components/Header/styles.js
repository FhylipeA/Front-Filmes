import { Link } from "react-router-dom";

import styled from "styled-components"

export const Container = styled.header`
   grid-area: header;

   height: 105px;
   width: 100%;

   border-bottom: 1px solid #948F99;

   display: flex;
   justify-content: space-between;
   align-items: stretch;

   padding: 24px 123px;

   background-color: #1C1B1E;
`;

export const Profile = styled(Link)`
   display: flex;
   align-items: center;
   margin-left: 64px !important;
   width: 350px;
   gap: 15px;

   > img {
      width: 56px;
      height: 56px;
      border-radius: 50px;
   }

   > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      line-height: 24px;

      span {
         font-size: 14px;
         color: #999591;
      }

      strong {
         font-size: 18px;
         color: white;
      }
   }
`;

export const Logout = styled.div`

   margin-right: 64px !important;

   font-size: 32px;
   color: #FF859B;

`;
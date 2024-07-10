import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
`;

export const Section = styled.div`
   width: 100%;
   padding: 40px 123px;

   > a {
      color: #FF849B;
      display: flex;
      align-items: center;
      font-size: 18px;
   }
`;

export const Title = styled.div`
   width: 100%;
   margin-top: 24px !important;

   display: flex;
   align-items: baseline;
   gap: 20px;

   > h1 {
      font-size: 36px;
      font-weight: 500;
   }

   > span {
      font-size: 25px;
      color: #FF849B;
   }

`;

export const Details = styled.div`
   width: 100%;
   margin-top: 24px !important;

   display: flex;
   align-items: center;
   gap: 8px;

   > img {
      width: 16px;
      height: 16px;
   }

   > span:nth-child(3) {
      display: flex;
      gap: 3px;
      align-items: center;
      > svg {
         color: #FF849B;
      }
   }
`;

export const Tags = styled.div`
   width: 100%;
   margin-top: 40px !important;
`;

export const Desc = styled.div`
   width: 100%;
   margin-top: 40px !important;
`;
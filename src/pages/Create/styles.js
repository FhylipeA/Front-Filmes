import styled from "styled-components";

export const Container = styled.div`
   
`;

export const Section = styled.div`
   width: 100%;
   padding: 40px 123px;

   > a {
      color: #FF849B;
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-bottom: 24px !important;
   }
`;

export const Form = styled.form`
   width: 100%;

   margin-top: 40px !important;

   .info {
      display: flex;
      align-items: center;
      gap: 40px;
   }

   .desc {
      margin-top: 40px !important;
   }

   > section {
      width: 100%;
      margin-top: 40px !important;

      h3 {
         font-size: 25px;
         color: #999591;
         margin-bottom: 24px !important;
      }

      div {
         display: flex;
         align-items: baseline;
         padding: 16px;
         background-color: black;
         border-radius: 8px;
         gap: 24px;
      }
   }

   > footer {
      width: 100%;
      margin-top: 40px !important;
      display: flex;
      justify-content: space-between;
      gap: 40px;

      button {
         width: 100%;
         padding: 16px 0;
         border: none;
         border-radius: 10px;
      }

      .exclude {
         background-color: black;
         color: #CC6A7C;
      }

      .save {
         background-color: #FF859B;
         color: black;
      }
   }
`;
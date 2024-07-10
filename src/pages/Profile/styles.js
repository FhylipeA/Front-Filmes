import styled from "styled-components";

export const Container = styled.div`
   width: 100%;

   > header {
      width: 100%;
      height: 144px;

      background-color: rgba(255, 133, 155, 0.05);

      display: flex;
      align-items: center;
      padding: 0 124px;
      
      a {
         font-size: 24px;
         color: rgba(255, 133, 155, 1);
         display: flex;
         align-items: center;
      }
      
      svg {
         font-size: 24px;
         color: rgba(255, 133, 155, 1);
         margin-right: 5px !important;
      }

   }
`;

export const Form = styled.form`
   max-width: 340px;
   margin: 30px auto 0 !important;

   > div:nth-child(4) {
      margin-top: 24px !important;
   }
`;

export const Avatar = styled.div`
   position: relative;
   margin: -124px auto 32px !important;

   width: 186px;
   height: 186px;

   > img {
      width: 186px;
      height: 186px;
      border-radius: 50px;
   }

   > label {
      width: 48px;
      height: 48px;

      background-color: rgba(255, 133, 155, 1);
      border-radius: 50%;
      
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 7px;

      cursor: pointer;

      input {
         display: none;
      }

      svg {
         width: 20px;
         height: 20px;
         color: #1C1B1E;
      }
   }
`;
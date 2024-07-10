import styled from "styled-components"

import backGroundImg from "../../assets/cinema.png"

export const Container = styled.section`
   height: 100vh;

   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
   padding: 0 136px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   text-align: center;

   > h1 {
      font-size: 48px;
      color: #FF859B;
   }

   > h2 {
      font-size: 24px;
      margin: 48px 0 !important;
   }

   > p {
      font-size: 13px;
      color: #CAC4CF;
   }

   > a {
      margin-top: 124px !important;
      color:#FF859B ;
   }
`;

export const Background = styled.div`
   flex: 1;
   background: url(${backGroundImg}) no-repeat center center;
   background-size: cover;
`;
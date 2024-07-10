import styled from "styled-components";

export const Container = styled.button`
   width: 100%;

   background-color: rgba(255, 133, 155, 0.05);
   
   display: flex;
   flex-direction: column;
   border: none;
   border-radius: 10px;

   padding: 22px;
   margin-bottom: 16px !important;

   > h1 {
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 24px;
      color: white;
   }

   .rating {
      display: flex;
      align-items: center;
      margin: 10px 0 !important; /* Ajustar o espaçamento acima e abaixo das estrelas */
   }

   .rating svg {
      color: rgba(255, 133, 155, 1); /* Cor das estrelas */
      margin-right: 5px;
   }


   > p {
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Número de linhas que você quer exibir */
      -webkit-box-orient: vertical;
      color:   #ccc;
      text-align: left;
      margin-top: 15px !important;
   }

   > footer {
      display: flex;
      width: 100%;
      margin-top: 20px !important;
   }
`;
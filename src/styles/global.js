import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -web-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   
   :root{
      font-size: 62.5%;
   }
`;
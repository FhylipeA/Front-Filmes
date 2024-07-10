import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      margin: 0 !important;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   
   body {
      background-color: #1c1b1e;
      color: white;
   }

   body, input, button, textarea {
      font-family: "Roboto Slab", serif;
      font-optical-sizing: auto;
      font-size: 16px;
      font-style: normal;
      outline: none;
   }

   a {
      text-decoration: none;
   }

   button, a {
      cursor: pointer;
      transition: filter 0.2s;
   }

   button:hover, a:hover {
      filter: brightness(0.9);
   }
`;

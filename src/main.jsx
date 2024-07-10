import React from 'react';
import ReactDOM from 'react-dom'; // Importe o ReactDOM

import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Routes } from "./routes";

// Use ReactDOM.createRoot para renderizar a aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);

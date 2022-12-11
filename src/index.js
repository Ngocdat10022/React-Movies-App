import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "~/assets/styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { theme } from "~/assets/styles/theme";
import { Provider } from "react-redux";
import { store } from "~/Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle></GlobalStyle>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

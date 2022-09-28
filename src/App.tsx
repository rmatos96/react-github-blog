import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routers } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Routers />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}


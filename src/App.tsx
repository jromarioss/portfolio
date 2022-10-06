import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { defaulTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";


export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Header />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
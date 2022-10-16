import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { defaulTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";

export function App() {

  return (
    <ThemeProvider theme={defaulTheme}>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
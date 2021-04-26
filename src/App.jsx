import React, { Component } from "react";
import GlobalStyle, { Container } from "./theme/GlobalStyle";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import Stats from "./components/Stats";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Stats />
        </Container>
      </ThemeProvider>
    );
  }
}
export default App;

import React, { Component } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Preview Card</h1>
      </ThemeProvider>
    );
  }
}
export default App;

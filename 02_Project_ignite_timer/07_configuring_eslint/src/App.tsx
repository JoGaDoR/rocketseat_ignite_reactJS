import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { deafultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";

export function App() {
  return (
    <ThemeProvider theme={deafultTheme}> 
      <Button variantColor="primary" />
      <Button variantColor="secondary"/>
      <Button variantColor="success"/>
      <Button variantColor="danger"/>
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}

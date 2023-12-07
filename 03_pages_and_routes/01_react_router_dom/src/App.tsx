import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variantColor="primary" />
      <Button variantColor="secondary" />
      <Button variantColor="success" />
      <Button variantColor="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}

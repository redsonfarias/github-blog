import { BrowserRouter } from 'react-router-dom'
import { Router } from '@/Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'
import { setDefaultOptions } from 'date-fns'
import { pt } from 'date-fns/locale'
import { GlobalStyle } from '@/styles/global'

setDefaultOptions({
  locale: pt
})

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

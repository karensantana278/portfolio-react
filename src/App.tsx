import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar/index'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false)

  function changeTheme() {
    setDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

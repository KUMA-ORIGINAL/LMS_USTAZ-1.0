import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import Routing from './pages/router'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  const [theme, colorMode] = useMode()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routing />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}

export default App

import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import React, {createContext} from 'react';
import Routing from './pages/router'
import Store from './store'
import {ToastContainer} from "react-toastify";
import  "react-toastify/dist/ReactToastify.css"

export const store = new Store();

export const Context = createContext({
  store,
})


const App = () => {
  const [theme, colorMode] = useMode()
  return (
    <Context.Provider value={{store}}>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
          <ToastContainer/>
            <CssBaseline />
            <Routing />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App

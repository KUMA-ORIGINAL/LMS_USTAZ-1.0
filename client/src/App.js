import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';
import Routing from './pages/router'
import {ToastContainer} from "react-toastify";
import  "react-toastify/dist/ReactToastify.css"
import store from "./store"
import { Provider } from 'react-redux';

const App = () => {
  const [theme, colorMode] = useMode()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
          <ToastContainer/>
            <CssBaseline />
            <Routing />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}

export default App

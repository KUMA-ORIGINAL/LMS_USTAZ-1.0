import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {BrowserRouter} from "react-router-dom";

import Routing from "./pages/router";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <Routing/>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App
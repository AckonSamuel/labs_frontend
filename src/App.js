// react-router components
import { Routes, Route } from "react-router-dom";

// @mui material components
import {createTheme} from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/styles';
import CssBaseline from "@mui/material/CssBaseline";

import routes from "routes";


const App = () => {

  const cache = createEmotionCache();
  const theme = createTheme();

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>{getRoutes(routes)}</Routes>
    </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
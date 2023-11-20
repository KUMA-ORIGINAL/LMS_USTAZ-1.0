import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";




export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        iceAccent: {
          100: "#ccdefc",
          200: "#99bdfa",
          300: "#669bf7",
          400: "#337af5",
          500: "#0059f2",
          600: "#0047c2",
          700: "#003591",
          800: "#002461",
          900: "#001230"
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#d0e2f6",
          200: "#a1c5ed",
          300: "#73a7e3",
          400: "#448ada",
          500: "#156dd1",
          600: "#1157a7",
          700: "#0d417d",
          800: "#082c54",
          900: "#04162a"
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        iceAccent: {
          100: "#001230",
          200: "#002461",
          300: "#003591",
          400: "#0047c2",
          500: "#0059f2",
          600: "#337af5",
          700: "#669bf7",
          800: "#99bdfa",
          900: "#ccdefc",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#04162a",
          200: "#082c54",
          300: "#0d417d",
          400: "#1157a7",
          500: "#156dd1",
          600: "#448ada",
          700: "#73a7e3",
          800: "#a1c5ed",
          900: "#d0e2f6",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.iceAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[600],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.iceAccent[100],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[500],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize:12,
        h1:{
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize:40,
        },
        h2:{
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize:32,
        },
        h3:{
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize:24,
        },
        h4:{
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize:20,
        },
        h5:{
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize:16 ,
        },
        h6:{
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize:14,
        },
    }
  };
};


export const ColorModeContext  = createContext({
    toggleColorMode:() => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");
    
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    )
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}
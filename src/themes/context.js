import React from "react"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import { lightTheme, darkTheme } from "@themes";

export const ThemeContext = React.createContext({
  theme: undefined,
  toggleTheme: () => null,
})

export const ThemeProvider = props => {
  const [theme, setTheme] = React.useState(props.theme)

  // Get the initial theme on the preferences if it exists
  React.useEffect(() => {
    if (localStorage.getItem('mui-theme')) {
      setTheme(localStorage.getItem('mui-theme'))
    }
  }, [])

  // store the preference
  React.useEffect(() => {
    if (theme !== localStorage.getItem('mui-theme')) {
      localStorage.setItem('mui-theme', theme)
    }
  }, [theme])

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(theme !== 'light' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 

export const useThemeContext = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  return { theme, toggleTheme }
}
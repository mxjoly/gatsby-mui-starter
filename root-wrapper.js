import React from "react"
import { ThemeProvider } from "@themes/context"

export default ({ element }) => (
  <ThemeProvider theme='light'>
    {element}
  </ThemeProvider>
)
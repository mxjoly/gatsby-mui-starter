import { createMuiTheme } from '@material-ui/core/styles';
import { lightPalette, darkPalette } from './palettes';
import { lightTypography, darkTypography } from './typographies';

// Default light theme
let lightTheme = createMuiTheme({
  palette: {
    ...lightPalette
  },
  typography: {
    ...lightTypography
  },
  spacing: 5
});

// Dark theme
let darkTheme = createMuiTheme({
  palette: {
    ...darkPalette
  },
  typography: {
    ...darkTypography,
  },
  spacing: 5
});

export {
  lightTheme,
  darkTheme
}
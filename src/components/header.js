import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ToggleButton from "@material-ui/lab/ToggleButton"
import Tooltip from "@material-ui/core/Tooltip"
import ThemeIcon from "@material-ui/icons/Brightness7"


import { useThemeContext } from "@themes/context"
import Language from "./language"

const useStyles = makeStyles(
  theme => ({
    siteName: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    toggle: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: '20px',
      marginRight: '10px'
    }
  })
)

const Header = () => {
  const intl = useIntl()
  const classes = useStyles()
  const { toggleTheme } = useThemeContext()
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `)

  return (
    <header>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h2">
            <Link to="/" className={classes.siteName}>
              {site.siteMetadata.siteName}
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Tooltip title={intl.formatMessage({ id: "component.header.toggle_theme" })}>
              <ToggleButton onChange={() => toggleTheme()} className={classes.toggle} value="toggle_theme">
                <ThemeIcon />
              </ToggleButton>
            </Tooltip>
            <Language />
          </Grid>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { injectIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import Header from "./header"
import Footer from "./footer"

const useStyles = makeStyles(
  theme => ({
    cover: {
      position: 'absolute',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      right: 0,
      left: 0
    },
    container: {
      padding: '20px 5%',
      backgroundColor: theme.palette.background.paper
    },
    content: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  })
)

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.cover}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
        <CssBaseline />
        <div className={classes.container}>
          <Header />
        </div>
        <div className={classes.content}>
          <main>{children}</main>
        </div>
        <div className={classes.container}>
          <Footer />
        </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default injectIntl(Layout)

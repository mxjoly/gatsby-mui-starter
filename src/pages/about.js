import React from "react"
import { FormattedMessage, navigate, useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"

import Layout from "@components/layout"
import SEO from "@components/seo"


const useStyles = makeStyles(
  theme => ({
    text: {
      margin: theme.spacing(3, 0)
    }
  })
)

const Home = ({ location, pathContext }) => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <Layout>
      <Grid container justify="center">
        <Grid container item xs={11} sm={9} lg={8} alignItems="center" >
          <SEO
            lang={intl.locale}
            title={intl.formatMessage({ id: "metadata.about.title" })}
            description={intl.formatMessage({ id: "metadata.about.description" })}
            path={location.pathname}
            originalPath={pathContext.intl.originalPath}
          />
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{ textAlign: 'center' }}
          >
            <Typography variant="h1" component='h1' className={classes.text} >
              <FormattedMessage id="page.about.title" />
            </Typography>
            <Typography variant="body1" component='p' className={classes.text}>
              <FormattedMessage id="page.about.informations" />
            </Typography>
            <Typography variant="button" className={classes.text} >
              <Link onClick={() => navigate('/')}>
                <FormattedMessage id="page.about.link" />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home

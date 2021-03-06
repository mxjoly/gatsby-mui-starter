import React from "react"
import { FormattedMessage, navigate, useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"

import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"


const useStyles = makeStyles(
  theme => ({
    text: {
      margin: theme.spacing(3, 0)
    }
  })
)

const Home = ({ location, pageContext }) => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <Layout>
      <Grid container justify="center">
        <Grid container item xs={11} sm={11} lg={8} alignItems="center" >
          <SEO
            lang={intl.locale}
            title={intl.formatMessage({ id: "metadata.home.title" })}
            description={intl.formatMessage({ id: "metadata.home.description" })}
            path={location.pathname}
            originalPath={pageContext.intl.originalPath}
          />
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ textAlign: 'center' }}
          >
            <Typography variant="h1" component='h1' className={classes.text} >
              <FormattedMessage id="page.home.title" />
            </Typography>
            <Typography variant="body1" component='p' className={classes.text}>
              <FormattedMessage id="page.home.presentation" />
            </Typography>
            <Typography variant="button" className={classes.text} >
              <Link onClick={() => navigate('/about/')}>
                <FormattedMessage id="page.home.link" />
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={11} style={{ margin: 'auto' }} >
            <Image />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home

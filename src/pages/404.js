import React from "react"
import { FormattedMessage, navigate } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"

import Layout from "@components/layout"


const useStyles = makeStyles(
  theme => ({
    text: {
      margin: theme.spacing(3, 0),
      width: '350px'
    }
  })
)

const NotFound = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container justify="center" >
        <Grid container item xs={11} sm={11} lg={8} alignItems="center" >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Typography variant="h1" component='h1' className={classes.text}>
              <FormattedMessage id="page.not_found.title" />
            </Typography>
            <Typography variant="button" className={classes.text} >
              <Link onClick={() => navigate('/')}>
                <FormattedMessage id="page.not_found.link" />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default NotFound

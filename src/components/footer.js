import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(
  theme => ({
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    }
  })
)

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container alignItems="center" justify="center">
        <Typography variant="subtitle1" component='p'>
          © {new Date().getFullYear()}, Built with&nbsp;
          <b><a href="https://www.gatsbyjs.org" className={classes.link}>Gatsby</a></b>
        </Typography>
      </Grid>
    </footer>
  );
}

export default Footer
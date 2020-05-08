import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Typography from "@material-ui/core/Typography"
import LanguageIcon from "@material-ui/icons/Language"

const languageName = {
  en: "English",
  fr: "Français",
}

const Language = () => {
  const handleChange = (event) => {
    changeLocale(event.target.value)
  }

  return (
    <Grid
      container
      alignItems='center'
      style={{ width: 'auto' }}
    >
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <Select
            displayEmpty
            value={currentLocale}
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              <LanguageIcon />&nbsp;
              <Typography variant="overline">
                Langues
              </Typography>
            </MenuItem>
            {languages.map(lang => (
              <MenuItem key={lang} value={lang}>
                <Typography variant="overline">
                  {languageName[lang]}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        )}
      </IntlContextConsumer>
    </Grid>
  )
}

export default Language

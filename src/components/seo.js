/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, link, meta, title, description, path, originalPath }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
            siteUrl
            image
            author
            languages
          }
        }
      }
    `
  )

  const alternateLinks = () => {
    if (!originalPath) return [];

    return site.siteMetadata.languages.map(lang => {
      const siteUrl = site.siteMetadata.siteUrl
      const href = siteUrl + (siteUrl.endsWith('/') ? '' : '/') + lang + originalPath
      return {
        rel: 'alternate',
        href,
        hrefLang: lang
      }
    })
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`${site.siteMetadata.siteName} | %s`}
      link={alternateLinks().concat(link)}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl + path,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  link: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  originalPath: PropTypes.string,
  link: PropTypes.arrayOf(Object),
  meta: PropTypes.arrayOf(Object),
}

export default SEO

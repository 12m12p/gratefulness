import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'

import Header from 'components/Header'
import { Container } from 'components/Grid'

import config from '../../../config/meta'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header siteTitle={config.siteTitle || config.siteTitleAlt} />
      <Container maxWidth="700px" px={3}>
        {children}
      </Container>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

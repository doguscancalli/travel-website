import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../../theme/globalStyle'
import GlobalComponent from '../GlobalComponent'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <GlobalComponent />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

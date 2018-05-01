import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import runPolyfills from '../util/polyfills'
runPolyfills()

import 'semantic-ui-css/semantic.min.css'

import Header from '../components/header'

import background from './trianglify2.svg'

const Body = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const Layout = ({ children, data }) => (
  <Body>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Content>{children()}</Content>
  </Body>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

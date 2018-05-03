import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

import runPolyfills from '../util/polyfills'

import Header from '../components/header'
import background from './trianglify2.svg'

import 'normalize.css'

injectGlobal`
  html {
    font-family: 'Roboto', sans-serif;
  }
`

const Body = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
`

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  componentDidMount() {
    runPolyfills()
  }

  render() {
    const { children, data } = this.props

    return (
      <Body>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio website for Simon Van den Broeck, Junior Frontend Engineer' },
            { name: 'keywords', content: 'javascript, web development, react, frontend' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children()}
      </Body>
    )
  }
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

import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'

import runPolyfills from '../../util/polyfills'
import 'normalize.css'
import './fonts.css'

import Header from '../../sections/Header'

const background = require('./trianglify2.svg') as string

const Body = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
`
interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  children: () => React.ReactChild
}

class Layout extends React.Component<Props> {
  componentDidMount() {
    runPolyfills()
  }

  render() {
    const { children } = this.props

    return (
      <Body>
        <Helmet
          title="Simon Van den Broeck"
          meta={[
            {
              name: 'description',
              content:
                'Portfolio website for Simon Van den Broeck, Junior Frontend Engineer',
            },
            {
              name: 'keywords',
              content: 'javascript, web development, react, frontend',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        {children}
      </Body>
    )
  }
}

export default Layout

import * as React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { media } from '../util/style-utils'

import ScrollButton from './ScrollButton'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const FadeInPage = styled.div`
  ${({ show }) => (show ? `animation: 1s ${fadeIn} ease-out` : `opacity: 0`)};
  height: 100vh;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GreetingContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  align-items: center;
  height: 125px;
  width: 100%;
`

const Greeting = styled.h1`
  color: rgb(150, 135, 155);
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  ${media.small`
  font-size: 64px;`};
`

class Welcome extends React.Component {
  state = {
    show: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, 1000)
  }

  render() {
    return (
      <Content>
      <FadeInPage show={this.state.show}>
        <GreetingContainer>
          <Greeting>Hello, I'm Simon</Greeting>
        </GreetingContainer>
        <ScrollButton />
      </FadeInPage>
      </Content>
    )
  }
}

export default Welcome

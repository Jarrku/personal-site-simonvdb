import React from 'react'
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
const FadeInPage = styled.div`
  ${({ show }) => (show ? `animation: 1s ${fadeIn} ease-out` : `opacity: 0`)};
  height: 100vh;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IntroContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  align-items: center;
  height: 125px;
  width: 100%;
`

const Intro = styled.h1`
  color: rgba(0, 0, 255, 0.7);
  font-size: 50px;
  margin: auto;

  ${media.small`
  font-size: 64px;`};
`

class IntroComponent extends React.Component {
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
      <FadeInPage show={this.state.show}>
        <IntroContainer>
          <Intro>Hello, I'm Simon</Intro>
        </IntroContainer>
        <ScrollButton />
      </FadeInPage>
    )
  }
}

export default IntroComponent

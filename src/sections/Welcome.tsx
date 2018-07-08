import * as React from 'react'
import styled from 'styled-components'

import { media } from '../util/style-utils'

import FadeInPage from '../components/FadeInPage'
import ScrollButton from '../components/ScrollButton'

const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const GreetingContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  align-items: center;
  height: 125px;
  width: 100%;
  margin-bottom: 10vh;
`

const Greeting = styled.h1`
  color: rgb(150, 135, 155);
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  ${media.small`
  font-size: 64px;`};
`

export interface State {
  show: boolean
}

export default class Welcome extends React.Component<{}, State> {
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

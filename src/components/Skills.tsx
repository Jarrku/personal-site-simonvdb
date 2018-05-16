import * as React from 'react'
import styled from 'styled-components'
import { helpers, media } from '../util/style-utils'

const Container = styled.section`
  background-color: ${helpers.dark};
  margin-bottom: 0;
  padding: 60px 5%;
  display: flex;
  flex-flow: row wrap;

  ${media.xxlarge`
    padding-left: 12%;
    padding-right: 12%;
  `};
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 60px;
  line-height: 46px;
  flex: 1 100%;
  font-weight: 400;
`

const Paragraph = styled.p`
  flex: 1 100%;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 5px;
  line-height: 2.5rem;
  font-size: 1.584rem;
  font-weight: 300;
  padding: 0 20%;
  color: rgb(225, 210, 230);
`

export default class Skills extends React.Component {
  render() {
    return (
      <Container>
        <Title>Skills</Title>
        <Paragraph>
          I love development and design. I'm most comfortable with front-end
          technologies like React and Redux, but I have also done a lot of work
          in back-end technologies like Rails. I'm a big fan of functional
          programming.
        </Paragraph>
      </Container>
    )
  }
}

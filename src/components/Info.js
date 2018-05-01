import React from 'react'
import styled from 'styled-components'
import { helpers, media } from '../util/style-utils'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
`

const Icon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Span = styled.span`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
  font-weight: 300;
  line-height: 50px;
  padding-left: 10px;
  font-size: 14px;

  ${media.small`
  font-size: 16px
`};

  ${media.medium`
    font-size: 18px
  `};

  ${media.xlarge`
    font-size: 26px
  `};
`

const Button = styled.button`
  background-color: rgb(138, 138, 138);
  color: rgb(229, 229, 229);
  border-radius: 2px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Info extends React.Component {
  render() {
    return (
      <Container>
        <Icon>T</Icon>
        <Span>Simon Van den Broeck</Span>
        <Button>S</Button>
      </Container>
    )
  }
}

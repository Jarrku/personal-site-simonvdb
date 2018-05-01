import React from 'react'
import styled from 'styled-components'
import { helpers, media } from '../util/style-utils'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  margin-bottom: 5px;
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
  font-size: 14px;

  ${media.small`
  font-size: 16px
`};

  ${media.medium`
    font-size: 18px
  `};

  ${media.xlarge`
    font-size: 20px
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
  padding: 0;
`

export default class Info extends React.Component {
  render() {
    const { text, PreIcon, ButtonIcon, onClick } = this.props
    return (
      <Container>
        <Icon>
          <PreIcon />
        </Icon>
        <Span>{text}</Span>
        <Button onClick={onClick}>
          <ButtonIcon />
        </Button>
      </Container>
    )
  }
}

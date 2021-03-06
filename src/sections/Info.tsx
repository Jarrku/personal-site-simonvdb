import * as React from 'react'
import styled from 'styled-components'

import { media } from '../util/style-utils'

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
  font-size: 20px
`};

  ${media.medium`
    font-size: 18px
  `};

  ${media.xxlarge`
    font-size: 20px
  `};
`

const Button = styled.button`
  background-color: rgb(150, 135, 155);
  border-radius: 2px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  transition: all 0.4s ease;
  &:hover {
    background-color: rgb(131, 117, 135);
  }
`

const A = Button.withComponent('a')

type ClickEventHandler = (
  event:
    | React.MouseEvent<HTMLAnchorElement>
    | React.MouseEvent<HTMLButtonElement>
) => void

interface ClickableProps {
  children: React.ReactNode
  onClick: ClickEventHandler | string
}

const Clickable = ({ children, onClick, ...other }: ClickableProps) =>
  onClick instanceof Function ? (
    <Button onClick={onClick} {...other}>
      {children}
    </Button>
  ) : (
    <A href={onClick} {...other}>
      {children}
    </A>
  )

interface Props {
  text: string
  PreIcon: (props: any) => React.ReactElement<any>
  ButtonIcon: (props: any) => React.ReactElement<any>
  target?: string
  rel?: string
  'aria-label'?: string
  onClick: string | ClickEventHandler
}

export default class Info extends React.Component<Props> {
  render() {
    const { text, PreIcon, ButtonIcon, onClick, ...props } = this.props
    return (
      <Container>
        <Icon>
          <PreIcon style={{ fill: 'rgb(150, 135, 155)' }} />
        </Icon>
        <Span>{text}</Span>
        <Clickable onClick={onClick} {...props}>
          <ButtonIcon style={{ fill: 'rgb(232, 229, 233)' }} />
        </Clickable>
      </Container>
    )
  }
}

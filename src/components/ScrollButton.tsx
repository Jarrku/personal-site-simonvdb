import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { media } from '../util/style-utils'
import { withScroll } from 'react-fns'
import { ArrowDownSVG } from '../svg'

const bounce = keyframes`
  0% { transform:translateY(0); }
  50% { transform:translateY(30px); }
  100% { transform:translateY(0); }
`

const hide = keyframes`
  0% { transform:scale(1,1); }
  100% { transform:scale(0, 0); }
`

const RoundButton = styled.div`
  ${({ showButton }) =>
    showButton
      ? `animation: ${bounce} 2.5s infinite`
      : `animation: ${hide} 1s ease`};
  ${({ showButton }) => !showButton && `transform: scale(0,0)`};
  transition: all 0.4s ease;
  height: 70px;
  width: 70px;
  position: absolute;
  top: 80vh;
  border: 7px solid #fff;
  border-radius: 50%;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  ${media.small`
    height: 105px;
    width: 105px;
  `};
`

class ScrollButton extends React.Component {
  componentDidUpdate() {
    if (this.props.y === 0 && !this.state.showButton) {
      this.setState({ showButton: true })
    } else if (this.props.y !== 0 && this.state.showButton) {
      this.setState({ showButton: false })
    }
  }

  state = {
    showButton: true,
  }

  onClick = () =>
    document
      .querySelector('#intro-container')
      .scrollIntoView({ behavior: 'smooth' })

  render() {
    return (
      <RoundButton
        {...this.props}
        showButton={this.state.showButton}
        onClick={this.onClick}
      >
        <ArrowDownSVG fill="rgb(150, 135, 155)" height="48" width="48" />
      </RoundButton>
    )
  }
}

export default withScroll(ScrollButton)

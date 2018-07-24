import * as React from 'react'
import styled from 'styled-components'

import { HomeSVG, AssignmentSVG, AccountCircleSVG } from '../svg'

const StyledHeader = styled.div`
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  width: 100%;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-content: center;
`

const Title = styled.button`
  color: rgb(122, 160, 188);
  text-decoration: none;
`

const Icon = styled.div`
  padding: 5px;
  margin: 5px 0;
  :hover {
    background-color: grey;
  }
`
const goTo = (id: string) => {
  window.document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
}

const goToWelcome = () => window.scroll({ top: 0, left: 0, behavior: 'smooth' })
const goToSkills = () => goTo('#skills')
const goToIntro = () => goTo('#intro-container')

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Icon onClick={goToWelcome}>
          <HomeSVG width={36} height={36} />
        </Icon>
        <Icon onClick={goToIntro}>
          <AccountCircleSVG width={36} height={36} />
        </Icon>
        <Icon onClick={goToSkills}>
          <AssignmentSVG width={36} height={36} />
        </Icon>
      </StyledHeader>
    )
  }
}

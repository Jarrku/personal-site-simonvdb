import * as React from 'react'
import styled from 'styled-components'

import { HomeSVG, AssignmentSVG, AccountCircleSVG } from '../svg'

const StyledHeader = styled.div`
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.7);
  height: 8vh;
  position: fixed;
  width: 100%;
  display: flex;
`

const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.button`
  color: rgb(122, 160, 188);
  text-decoration: none;
`

const Icon = styled.div`
  padding: 10px;
  flex: 0 1 0%;
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
        <Container>
          <Icon onClick={goToWelcome}>
            <HomeSVG width={36} height={36} />
          </Icon>
          <Icon onClick={goToIntro}>
            <AccountCircleSVG width={36} height={36} />
          </Icon>
          <Icon onClick={goToSkills}>
            <AssignmentSVG width={36} height={36} />
          </Icon>
        </Container>
      </StyledHeader>
    )
  }
}

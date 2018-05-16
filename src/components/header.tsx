import * as React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const StyledHeader = styled.div`
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.7);
  height: 10vh;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const Title = styled(Link)`
  color: rgb(122, 160, 188);
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Title to="/">{'Header Icons' || siteTitle}</Title>
      </h1>
    </Container>
  </StyledHeader>
)

export default Header

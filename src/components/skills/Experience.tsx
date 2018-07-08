import * as React from 'react'
import styled from 'styled-components'

import { helpers } from '../../util/style-utils'

const Container = styled.div`
  ${helpers.skills};
  color: #fff;
  text-align: center;
  padding: 0 0.75rem;
`
const Header = styled.h2`
  font-size: 45px;
  font-weight: 300;
  padding: 0;
  margin: 1rem 0;
`
interface Props {
  title: string
  children: React.ReactNode
}

export default function Experience({ title, children }: Props) {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
    </Container>
  )
}

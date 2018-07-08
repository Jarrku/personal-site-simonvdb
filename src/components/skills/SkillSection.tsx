import * as React from 'react'
import styled from 'styled-components'

import Experience from './Experience'
import ContentContainer from './ContentContainer'

const SkillTitle = styled.h3`
  border: none;
  text-align: left;
  font-size: 25px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 10px;
  flex: 1 0 100%;
`

const Skill = styled.div`
  flex: 1 1 30%;
  text-align: center;
  padding: 0 10px;
  margin: 1rem 0;
  transition: background-color 0.3s ease;
  font-size: 26px;
  font-weight: 300;
`

interface Submenu {
  subtitle: string
  items: Array<string>
}

export interface Skill {
  title: string
  submenus: Array<Submenu>
}

export default function SkillSection({ title, submenus }: Skill) {
  return (
    <Experience title={title}>
      {submenus.map(({ subtitle, items }) => (
        <ContentContainer key={subtitle}>
          <SkillTitle>{subtitle}</SkillTitle>
          {items.map(item => <Skill key={item}>{item}</Skill>)}
        </ContentContainer>
      ))}
    </Experience>
  )
}

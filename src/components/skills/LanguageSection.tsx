import * as React from 'react'
import styled from 'styled-components'

import { media } from '../../util/style-utils'

import Experience from './Experience'
import ContentContainer from './ContentContainer'
import ProgressBar from '../ProgressBar'

const LanguageTitle = styled.span`
  flex: 1 0 100%;
  border: none;
  text-align: left;
  font-size: 36px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 1.5rem 0 1.5rem 1.5rem;
`

const LanguageDescription = styled.span`
  ${media.medium`
    flex: 1 0 45%;
  `} flex: 1 0 100%;
  text-align: left;
  font-size: 25px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
`

export interface Language {
  title: string
  description: string
  level: number
}

function Language({ title, description, level }: Language) {
  return (
    <ContentContainer key={title}>
      <LanguageTitle>{title}</LanguageTitle>
      <LanguageDescription>{description}</LanguageDescription>
      <ProgressBar percent={level} />
    </ContentContainer>
  )
}

interface LanguageSectionProps {
  languages: Array<Language>
}

export default function LanguageSection({ languages }: LanguageSectionProps) {
  return (
    <Experience title="Languages">
      {languages.map(language => (
        <Language key={language.title} {...language} />
      ))}
    </Experience>
  )
}

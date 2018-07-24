import * as React from 'react'
import styled from 'styled-components'

import { helpers, media } from '../util/style-utils'

import SkillSection, { Skill } from '../components/skills/SkillSection'
import LanguageSection, { Language } from '../components/skills/LanguageSection'

const Container = styled.section`
  background-color: ${helpers.dark};
  margin-bottom: 0;
  padding: 60px 5%;
  display: grid;
  grid-gap: 25px;

  ${media.xxlarge`
    padding-left: 12%;
    padding-right: 12%;
  `};
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  margin: 0;
`

const Paragraph = styled.p`
  line-height: 2.5rem;
  font-size: 1.584rem;
  color: #fff;
  font-weight: 100;
  margin: 0;

  ${media.medium`
  text-align: center;
  padding: 0 10%;
`};
`

const skills: Array<Skill> = [
  {
    title: 'Coding Skills',
    submenus: [
      {
        subtitle: 'Programming Skills',
        items: ['Javascript (ES6)', 'TypeScript', 'Java', 'C#', 'ReasonML'],
      },
      {
        subtitle: 'Backend Technologies',
        items: ['NodeJS', 'GraphQL', '(No)SQL'],
      },
      {
        subtitle: 'Frontend Technologies',
        items: ['React', 'AngularJS 1', 'Angular 5', 'HTML5', 'CSS3', 'SASS'],
      },
    ],
  },
  {
    title: 'Tools',
    submenus: [
      {
        subtitle: 'Version Control Systems',
        items: ['Git', 'TFS'],
      },
      {
        subtitle: 'Build Automatizations',
        items: ['Webpack', 'Gulp', 'Docker'],
      },
    ],
  },
]

const languages: Array<Language> = [
  {
    title: 'Dutch',
    description: 'Nederlands is mijn moedertaal.',
    level: 100,
  },
  {
    title: 'English',
    description: 'I am highly proficient in English.',
    level: 95,
  },
  {
    title: 'French',
    description: 'Je parle un peu de français.',
    level: 40,
  },
]

export default class Skills extends React.Component {
  render() {
    return (
      <Container>
        <Title>Skills</Title>
        <Paragraph id="skills">
          I love development and design. I'm most comfortable with front-end
          technologies like React and Redux, but I'm also comfortable in
          back-end technologies like NodeJS and GraphQL. I'm a big fan of
          functional programming.
        </Paragraph>
        {skills.map(skill => <SkillSection key={skill.title} {...skill} />)}
        <LanguageSection languages={languages} />
      </Container>
    )
  }
}
